import React, { Component } from 'react';
import { fire, authProvider } from '../../fire';
import { Redirect } from 'react-router-dom'
import { persistDataForNewUser } from '../../user-service.js';
import './Login.css';

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
				const { user, credential: { accessToken } } = result;

				console.log('logged in user with token', user, accessToken);
				persistDataForNewUser(user);
				this.setState({ redirectToReferrer: true });
			}).catch(error => {

			console.log(error.code);
			console.log(error.message);
		});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } };
		const { redirectToReferrer } = this.state;
		if (fire.auth().currentUser) {
			if (redirectToReferrer) {
				return (
					<Redirect to={from} />
				)
			} else {
				return <Redirect to="/userboard" />
			}
		}
		return (
			<div className="Login_container">
				<div className="Login_inner">
					<button className="Login_button" onClick={() => this.googleSignin()}>Logg inn</button>
				</div>
			</div>
		);
	}
}

export default Login;