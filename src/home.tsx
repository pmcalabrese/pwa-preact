import { h, AnyComponent, Component, render } from 'preact';
import { Subject } from 'rxjs/Subject';

export interface Props {
    open: boolean
}

export interface State {
    open: boolean
}

function ModalHOC<P extends Props>(SomeComponent: AnyComponent<any, any>, Eventstream: Subject<any>) {
    return class ModalHOC extends Component<P, State> {

        state = {
            open: false
        }

        componentDidMount() {
            this.setState({ open: this.props.open });
            Eventstream.next({ openModal: this.state.open });
            Eventstream.subscribe((state: any) => {
                this.setState({ open: state.openModal })
            });
        }

        componentWillReceiveProps(nextProps, nextState) {
            this.setState({ open: nextProps.open });
            return (nextProps.open !== this.state.open)
        }

        close() {
            this.setState({ open: false });
            Eventstream.next({ openModal: this.state.open });
        }

        render(props, state) {
            if (this.state.open) {
                return <div className="{ state.open ? 'modal is-active' : 'modal'}">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <SomeComponent {...props} {...state} />
                    </div>
                    <button class="modal-close is-large" aria-label="close" onClick={() => this.close()}></button>
                </div>
            }
        }
    }
}

export interface HOCProps {
    open: boolean
}

function ModalButtonHOC(Eventstream: Subject<any>) {
    return class AppModalButton extends Component<any, any> {
        componentDidMount() {
            Eventstream.subscribe((state: any) => {
                this.setState({ open: state.openModal })
            });
            // render(<Modal open={true} />, document.body);
        }
    
        open() {
            Eventstream.next({ openModal: true });
        }
    
        render(props, { open }) {
            return <div>
                <button onClick={() => { this.open() }}>open modal ({open ? "open" : "close"})</button>
            </div>
        }
    }
}

// create eventstream
// const eventStream = new Subject();
// create modal by passing down the content and the eventstream can listen to

// const Modal = ModalHOC<{ open: boolean }>(ContentOfTheModal, eventStream);

// const ModalButton = ModalButtonHOC<{ open: boolean }>(eventStream);

function createModalAndButton(content) {
    const eventStream = new Subject();
    const Modal = ModalHOC<{ open: boolean }>(content, eventStream);
    
    const ModalButton = ModalButtonHOC(eventStream);

    return { Modal, ModalButton, eventStream};
}

const renderModal = function(Modal, ModalButton, selector: Element, prop) {
    render(<ModalButton />, selector.parentElement, selector);
    render(<Modal {...prop} />, document.body);
}

function ContentOfTheModal({ open }: HOCProps) {
    return <div class="box">this is a content { open ? "open": "close"}</div>
}

const {Modal, ModalButton} = createModalAndButton(ContentOfTheModal)

renderModal(Modal, ModalButton, document.getElementById("preact-modal-button"), { open: false})

// Use the eventstream to emit the state and open can close the modal

// mount modal and button whereever you want
