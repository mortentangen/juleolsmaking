import React from 'react';
import { Link } from 'react-router-dom'
import BeerItem from './BeerItem/BeerItem';

const beerList = [
	{
		brand: 'Kinn',
		name: 'Julefred',
		year: '2017',
		id: '1'
	},
	{
		brand: 'Aass',
		name: 'Juleøl premium',
		year: '2017',
		id: '2'
	}
];

const Board = () =>
	<div>
		<Link to="/userboard">Delta</Link>
		{
			beerList.map(beer =>
				<BeerItem key={beer.id} beer={beer} />
			)
		}
	</div>;

export default Board;
