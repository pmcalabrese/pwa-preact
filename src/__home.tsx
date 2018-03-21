import { h, Component, render } from 'preact';

const SomeComponet = (props, state) => (
    <div>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
);

function connect(WrappedComponent) {
    return class Connect extends Component<any, any> {

        state = {
            myvar: false
        }

        changeIt() {
            this.setState({ myvar : !this.state.myvar});
            console.log("myvar", this.state.myvar)
        }

        render(props, state) {
            console.log("children:", props.children)
            return (<button onClick={() => { this.changeIt()}}>
            {(() => {
                if (this.state.myvar) {
                    return <span>Hello {JSON.stringify(this.state.myvar)}</span>
                } else {
                    return <WrappedComponent {...props} {...state}/>
                }
            })()}
            </button>);
        }
    };
}

const HOC = connect(SomeComponet);

render(<HOC>
    <span>!!!!!!!!!</span>
</HOC>, document.body)