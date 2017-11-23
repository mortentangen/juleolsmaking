import React from 'react';
import { Link } from 'react-router-dom'

const Client = () =>
	<div>
		<div>Logged in</div>
		<div><Link to="/">Board</Link></div>
	</div>;

export default Client;