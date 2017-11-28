import React, { Component } from 'react';
import fire from './fire';

const connect = (topLevelEntity, ref, setStateFromSnapshot) => WrappedComponent => {
	return class ContainerComponent extends Component {
		constructor(props) {
			super(props);
			this.state = { [topLevelEntity]: {} }

		}

		componentDidMount() {
			this.messagesRef = fire.database().ref(ref(this.props));
			this.messagesRef.on('value', snapshot => {
				this.setState(setStateFromSnapshot(snapshot));
			})
		}

		componentWillUnmount () {
			this.messagesRef.off('value');
		}

		render() {
			console.log('connect.state', this.state);
			return <WrappedComponent {...this.props} {...{ [topLevelEntity]: this.state[topLevelEntity]}} />;
		}
	}
};

export default connect;