import React from 'react';
import { Link } from 'react-router-dom'
import { fire } from '../fire';

const Board = () =>
	<div>
		<Link to="/userboard">Delta</Link>
		<div>Resultat kommer her {console.log('fire', fire)}</div>
	</div>;

export default Board;
