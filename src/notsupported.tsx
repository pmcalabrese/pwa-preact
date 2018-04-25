import { h, Component, ComponentProps } from 'preact';

export interface NotSupportedProps extends ComponentProps<NotSupported> {}

export interface NotSupportedState {}

export class NotSupported extends Component<NotSupportedProps, NotSupportedState> {



    render(props, state) {
        return <h2>This version is not supported</h2>
    }
}