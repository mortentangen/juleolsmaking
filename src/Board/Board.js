import React from 'react';
import { Link } from 'react-router-dom'
import BeerItem from './BeerItem/BeerItem';
import connect from '../connect';

const Board = ({ beer, votes }) => {
	const beerList = Object.entries(beer).map(keyValue => ({ id: keyValue[0], ...keyValue[1] }));
	console.log('votes', votes);
	return (
		<div>
			<Link to="/userboard">Delta</Link>
			{
				beerList.map(beer =>
					<BeerItem key={beer.id} beer={beer} votes={votes[beer.id] || {}} />
				)
			}
		</div>
	)
};

const setStateFromSnapshotForBeer = snapshot => () => ({ beer: snapshot.val() });
const setStateFromSnapshotForVotes = snapshot => () => ({ votes: snapshot.val() });

export default connect('votes', () => 'votes', setStateFromSnapshotForVotes)
(connect('beer', () => 'beer', setStateFromSnapshotForBeer)(Board));
