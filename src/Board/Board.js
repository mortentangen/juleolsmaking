import React from 'react';
import { Link } from 'react-router-dom'
import BeerItem from './BeerItem/BeerItem';
import connect from '../connect';
import { sortByScore } from '../vote-service';

const Board = ({ beer, votes }) => {
	const sorteredBeer = sortByScore(votes);
	return (
		<div>
			<Link to="/userboard">Delta</Link>
			{
				sorteredBeer.map(({ beerId }) =>
					<BeerItem key={beerId} beer={beer[beerId]} votes={votes[beerId] || {}} />
				)
			}
		</div>
	)
};

const setStateFromSnapshotForBeer = snapshot => () => ({ beer: snapshot.val() });
const setStateFromSnapshotForVotes = snapshot => () => ({ votes: snapshot.val() });

export default connect('votes', () => 'votes', setStateFromSnapshotForVotes)
(connect('beer', () => 'beer', setStateFromSnapshotForBeer)(Board));
