import React from 'react';
import { Link } from 'react-router-dom'
import { fire } from '../fire';

const Result = () =>
	<div>
		<Link to="/client">Delta</Link>
		<div>Resultat kommer her {console.log('fire', fire)}</div>
	</div>;

export default Result;
