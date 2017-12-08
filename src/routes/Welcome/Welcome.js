import React from 'react';
import { Link } from 'react-router-dom'
import './Welcome.css';

const Welcome = () =>
	<div className="Welcome_container">
		<p><Link to="/board">Resultater</Link></p>
		<p><Link to="/userboard">Delta</Link></p>
	</div>;

export default Welcome;