import { h, Component, render } from 'preact';
import Router from 'preact-router';

const Main = () => (
	<Router>
		<App path="/" />
		<App path="/1.0" />
		<App path="/1.1" />
		<App path="/2.0" />
	</Router>
);

// export interface Props extends ComponentProps<> {}

export interface AppState {
    version: string;
}

export class App extends Component<any, AppState> {

    versions = ["1.0", "1.1", "2.0"];

    componentDidMount() {
        console.log('this.props', this.props)
        if (this.props.path == "/") {
            this.setState({
                version: this.versions[2]
            })
        }
    }

    render(props, state) {
        return <div>
            <span id="version">v{state.version}</span>
            <textarea name="textarea" id="textarea"></textarea>
            <button class="button" type="button">Load</button>
            <button class="button" type="button">Save</button>
        </div>
    }
}

let $app;
try {
    $app = document.getElementById("app")
    render(<Main />, $app)
} catch (error) {
    throw Error("Cannot find element with the id 'app'");
}