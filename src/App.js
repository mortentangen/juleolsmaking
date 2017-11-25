import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import Client from './Client/Client';
import BeerReview from './BeerReview/BeerReview';
import Result from './Result/Result';
import Login from './Login/Login';
import { fire } from './fire';

class App extends Component {

	render() {
		return (
			<Router>
				<div>
					<Switch>
						<PrivateRoute path="/client"
						              component={Client}
						              exact />
						<PrivateRoute path="/client/:beerId"
						              component={BeerReview}
						              exact />
						<Route path='/login'
						       render={
							       routeProps =>
								       <Login {...routeProps} />
						       } />
						<Route path="/" component={Result} exact />
					</Switch>
				</div>
			</Router>
		);
	}
}

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest} render={props => (
			fire.auth().currentUser ? (
				<Component {...props} />
			) : (
				<Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				}} />
			)
		)} />
	);
};

export default App;