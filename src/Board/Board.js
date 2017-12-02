import React, { Component } from 'react';
import BeerItem from './BeerItem/BeerItem';
import Participants from './Participants/Participants';
import connect from '../connect';
import { sortByScore } from '../vote-service';
import Snow from 'react-snow-effect';
import './Board.css';

const colors = ['#0D5901', '#ccc', '#cc9900'];

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = { snow: false };
		setInterval(() => this.setState((state) => ({ snow: new Date().getMinutes() > 44 })), 60000);
	}

	render() {
		const { beer, votes, users } = this.props;
		const usersWithColors = Object.values(users).map((user, index) => ({
			color: colors[index],
			...user
		}));
		const sorteredBeer = sortByScore(votes);
		return (
			<div>
				<div className="Board_snow">
					{this.state.snow && <Snow />}
				</div>
				<Participants usersWithColors={usersWithColors} />
				<div>
					{
						sorteredBeer.map(({ beerId }) =>
							<BeerItem key={beerId}
							          beer={beer[beerId]}
							          votes={votes[beerId] || {}}
							          usersWithColors={usersWithColors}
							/>
						)
					}
				</div>
			</div>
		);
	}
}

const setStateFromSnapshotForBeer = snapshot => () => ({ beer: snapshot.val() });
const setStateFromSnapshotForVotes = snapshot => () => ({ votes: snapshot.val() });
const setStateFromSnapshotForUsers = snapshot => () => ({ users: snapshot.val() || {} });

export default connect('votes', () => 'votes', setStateFromSnapshotForVotes)(
	connect('beer', () => 'beer', setStateFromSnapshotForBeer)(
		connect('users', () => 'users', setStateFromSnapshotForUsers)(Board)
	)
);
