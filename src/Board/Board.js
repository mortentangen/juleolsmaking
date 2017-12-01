import React from 'react';
import { Link } from 'react-router-dom'
import BeerItem from './BeerItem/BeerItem';
import connect from '../connect';
import { sortByScore } from '../vote-service';
import './Board.css';

const Board = ({ beer, votes }) => {
	const sorteredBeer = sortByScore(votes);
	return (
		<div>

		<div>
			{
				sorteredBeer.map(({ beerId }) =>
					<BeerItem key={beerId} beer={beer[beerId]} votes={votes[beerId] || {}} />
				)
			}
		</div>
			<div className="Board_gotoUserBoard">
				<Link to="/userboard">Delta</Link>
			</div>
		</div>
	)
};

const setStateFromSnapshotForBeer = snapshot => () => ({ beer: snapshot.val() });
const setStateFromSnapshotForVotes = snapshot => () => ({ votes: snapshot.val() });

export default connect('votes', () => 'votes', setStateFromSnapshotForVotes)(
	connect('beer', () => 'beer', setStateFromSnapshotForBeer)(Board)
);
