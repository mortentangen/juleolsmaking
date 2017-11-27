import React, { Component } from 'react';
import fire from './fire';

const connect = (topLevelEntity, ref, setStateFromSnapshot) => WrappedComponent => {
	return class ContainerComponent extends Component {
		constructor(props) {
			super(props);
			this.state = { [topLevelEntity]: {} }
		}

		componentDidMount() {
			const messagesRef = fire.database().ref(ref(this.props));
			messagesRef.on('value', snapshot => {
				this.setState(setStateFromSnapshot(snapshot));
			})
		}

		render() {
			return <WrappedComponent {...this.props} {...{ [topLevelEntity]: this.state[topLevelEntity]}} />;
		}
	}
};

export default connect;