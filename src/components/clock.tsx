import { h, render, Component } from 'preact';

export interface ClockProps {
	// state: Object
}

interface ClockState {
	// time: number;
}

export class Clock extends Component<ClockProps, ClockState> {

	timer;

	constructor(props: ClockProps) {
		super(props);
		// set initial time:
		this.state = {
			time: Date.now()
		};
	}

	componentDidMount() {
		// update time every second¨
		this.timer = setInterval(() => {
			this.setState({ time: Date.now() });
		}, 1000);
	}

	componentWillUnmount() {
		// stop when not renderable
		clearInterval(this.timer);
	}

	render(props, { time }) {
		time = new Date(time).toLocaleTimeString();
		return <span>{ time }</span>
	}
}