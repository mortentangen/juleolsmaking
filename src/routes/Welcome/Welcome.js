import React from 'react';
import { Link } from 'react-router-dom'
import './Welcome.css';

const Welcome = () =>
	<div className="Welcome_container">
		<p><Link to="/board/2018">Resultater 2018</Link></p>
		<p><Link to="/board/2017">Resultater 2017</Link></p>
		<p><Link to="/userboard">Delta</Link></p>
	</div>;

export default Welcome;