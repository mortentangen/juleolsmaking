import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { fire } from './fire';

fire.database().ref().on('value', snapshot => {
	const store = snapshot.val();
	ReactDOM.render(<App {...store} />, document.getElementById('root'));
});

registerServiceWorker();
