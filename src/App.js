import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import Client from './Client/Client';
import Result from './Result/Result';
import Login from './Login/Login';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { loggedIn: false };
	}

	setLoggedIn() {
		console.log('set loggedIn: true', this.setState);
		this.setState({loggedIn: true});
	}

	render() {
		console.log('snapshot', this.props);
		return (
			<Router>
				<div>
					<Switch>
						<PrivateRoute path="/client"
						              component={Client}
						              isLoggedIn={this.state.loggedIn} />
						<Route path='/login'
						       render={
							       routeProps =>
								       <Login {...routeProps} setLoggedIn={() => this.setLoggedIn()} />
						       } />
						<Route path="/" component={Result} exact />
					</Switch>
				</div>
			</Router>
		);
	}
}

const PrivateRoute = ({ component: Component, isLoggedIn, setLoggedIn, ...rest }) => {
	console.log('isLoggedIn', isLoggedIn);
	return (
		<Route {...rest} render={props => (
			isLoggedIn ? (
				<Component {...props} />
			) : (
				<Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				}} setLoggedIn={setLoggedIn} />
			)
		)} />
	);
};

export default App;