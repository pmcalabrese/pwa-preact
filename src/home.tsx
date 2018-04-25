import { h, Component, render, ComponentProps } from 'preact';
import Router from 'preact-router';
import autobind from 'autobind-decorator';

import { NotSupported } from "./notsupported";
import { VERSIONS } from "./const";

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

interface FileReaderEventTarget extends EventTarget {
    result:string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string;
}

const Main = () => (
    <Router>
        <App path="1.0" />
        <App path="1.1" />
        <App path="2.0" />
        <NotSupported default />
    </Router>
);

export interface Props extends ComponentProps<App> {
    version: string;
}

export interface AppState {
    version: string;
    content_of_the_file: string;
    version_of_the_file: string;
}

export class App extends Component<any, AppState> {

    componentWillUpdate(props) {
        this.updateVersion(props);
    }

    componentDidMount() {
        this.updateVersion(this.props);
    }

    @autobind
    updateVersion(props) {
        if (props.version == "/") {
            this.setState({
                version: VERSIONS[2]
            })
        } else {
            this.setState({
                version: props.path.replace("/", "")
            })
        }
    }

    @autobind
    loadFile(file) {
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    let allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
    }

    @autobind
    readFile(f, cb) {
        if (f) {
            var r = new FileReader();
            r.onload = function(e: FileReaderEvent) {
                var contents = e.target.result;
                cb(f, contents)
            }
            r.readAsText(f);
          } else { 
            alert("Failed to load file");
          }
    }

    private getVersionFromContent(contents: string) {
        let version_of_the_file = contents.split("\n")[0].split(" v")[1];
        if (version_of_the_file.indexOf("|")) {
            const versions_of_the_file = version_of_the_file.split("|")
            version_of_the_file = versions_of_the_file[versions_of_the_file.length - 1]
        }
        return version_of_the_file;
    }

    @autobind
    fileChange(e: HTMLInputEvent) {
        const file = e.target.files[0];
        if (file.name.endsWith(".py")) {
            this.readFile(file, (f, contents) => {
                let version_of_the_file = this.getVersionFromContent(contents)
                this.setState({
                    version_of_the_file: version_of_the_file,
                    content_of_the_file: contents
                })
            });
        } else {
            alert("is not a Python file")
        }
    }

    @autobind
    save() {
        if (this.state.content_of_the_file) {
            const first_line = this.state.content_of_the_file.split("\n")[0];
            if (first_line.startsWith("#")) {
                if (this.state.version_of_the_file !== this.state.version) {
                    const new_first_line = first_line + "|" +this.state.version;
                    let content_in_lines = this.state.content_of_the_file.split("\n");
                    content_in_lines[0] = new_first_line;
                    const contents = content_in_lines.join("\n");
                    this.setState({
                        version_of_the_file: this.getVersionFromContent(contents),
                        content_of_the_file: contents
                    })
                }
            } else {
                // the first line is not a comment
            }
        } else {
            // the file is not loaded?
        }
    }

    render(props, state) {
        return <div>
            <span id="version">
                Versions: 
                {
                    VERSIONS.map((version) => {
                        if (version === state.version) {
                            return <b title="current version">v{state.version}</b>       
                        } else {
                            return <a href={`/${version}`}><i>v{version}</i> </a>
                        }
                    })
                }
            </span>
            { state.version_of_the_file ?<span id="version">Version of the file v{state.version_of_the_file}</span> : null}
            <textarea name="textarea" id="textarea">{ state.content_of_the_file }</textarea>
            <input type="file" name="one" value="" onChange={this.fileChange}/>
            <button class="button" type="button" onClick={this.save}>Save</button>
        </div>
    }
}

let app_id = 'app';
try {
    document.getElementById(app_id)
} catch (error) {
    throw Error(`Cannot find element with the id ${app_id}`);
}

render(<Main />, document.getElementById(app_id))