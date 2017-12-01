import React from 'react';
import { Link } from 'react-router-dom'

const Welcome = () =>
	<div>
		<p><Link to="/board">Resultater</Link></p>
		<p><Link to="/userboard">Delta</Link></p>
	</div>;

export default Welcome;