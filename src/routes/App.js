import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import UserBoard from './UserBoard/UserBoard';
import BeerReview from './BeerReview/BeerReview';
import BoardContainer from './Board/BoardContainer';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';
import fire from '../fire';
import './App.css';

class App extends Component {
	render() {
		console.log('currentUser', fire.auth().currentUser);
		return (
			<Router>
				<div className="App">
					<Switch>
						<PrivateRoute path="/userboard"
						              component={UserBoard}
						              exact />
						<PrivateRoute path="/userboard/:beerId"
						              component={BeerReview}
						              exact />
						<Route path='/login'
						       render={
							       routeProps =>
								       <Login {...routeProps} />
						       } />
						<Route path="/board" component={BoardContainer} exact />
						<Route path="/" component={Welcome} exact />
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