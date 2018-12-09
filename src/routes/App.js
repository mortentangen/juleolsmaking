import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import UserBoard from './UserBoard/UserBoard';
import RateBeerContainer from './RateBeer/RateBeerContainer';
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
            <PrivateRoute path="/userboard/:currentYear" component={UserBoard} exact />
            <PrivateRoute
              path="/userboard/:currentYear/:beerId"
              component={RateBeerContainer}
              exact
            />
            <Route
              path="/login"
              render={routeProps => <Login {...routeProps} />}
            />
            <Route path="/board/:currentYear" component={BoardContainer} exact />
            <Route path="/" component={Welcome} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fire.auth().currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default App;
