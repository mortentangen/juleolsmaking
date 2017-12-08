import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import registerServiceWorker from './registerServiceWorker';
import { fire } from './fire';

fire.database().ref().on('value', () => {
	// wait for firebase connection to get logged in
	ReactDOM.render(<App />, document.getElementById('root'));
});

registerServiceWorker();
