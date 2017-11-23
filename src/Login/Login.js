import React, { Component } from 'react';
import { fire, authProvider } from '../fire';
import { Redirect } from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props);
		console.log('Login.props', props);
		this.state = { redirectToReferer: false }
	}

	googleSignin() {
		fire.auth()
			.signInWithPopup(authProvider)
			.then(result => {
				const token = result.credential.accessToken;
				const user = result.user;

				console.log(token);
				console.log(user);
				this.props.setLoggedIn();
				console.log('this.setState', this.setState);
				this.setState({ redirectToReferrer: true });
			}).catch(error => {

			console.log(error.code);
			console.log(error.message);
		});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } };
		const { redirectToReferrer } = this.state;
		if (redirectToReferrer) {
			return (
				<Redirect to={from} />
			)
		}
		return (
			<div>
				<button onClick={() => this.googleSignin()}>Logg på</button>
			</div>
		);
	}
}

export default Login;