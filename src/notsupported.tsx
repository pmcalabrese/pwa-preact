import { h, Component, ComponentProps } from 'preact';
import { VERSIONS } from "./const";

export interface NotSupportedProps extends ComponentProps<NotSupported> {}

export interface NotSupportedState {}

export class NotSupported extends Component<NotSupportedProps, NotSupportedState> {



    render(props, state) {
        return <section>
                <h2>This version is not supported.</h2>
                <h3>Try:
                {
                    VERSIONS.map((version) => {
                        return <a href={`/${version}`}><i>v{version}</i> </a>
                    })
                }
                </h3>
        </section>
    }
}