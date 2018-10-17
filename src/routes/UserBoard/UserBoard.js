import React from 'react';
import User from '../../modules/User/User';
import UserBeerItem from './UserBeerItem/UserBeerItem';
import './UserBoard.css'
import connect from '../../connect';

const UserBoard = ({ beer, history }) => {
	const beerList = Object.entries(beer).map(keyValue => ({ id: keyValue[0], ...keyValue[1] }));
	return (
		<div>
			<div className="UserBoard_user">
				<User history={history} />
			</div>
			<div className="UserBoard_list">
				{
					beerList.map(beer =>
						<UserBeerItem key={beer.id} beer={beer} />
					)
				}
			</div>
		</div>
	);
};

const setStateFromSnapshot = snapshot => (prevState, props) => ({
	beer: snapshot.val()
});

export default connect('beer', () => 'beer', setStateFromSnapshot)(UserBoard);