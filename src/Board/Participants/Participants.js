import React from 'react';
import connect from '../../connect';
import User from '../../User/User';
import Participant from './Participant/Participant';
import './Participants.css';

const Participants = ({ usersWithColors }) =>
	<div className="Participants_container">
		{
			usersWithColors.map(user =>
				<Participant key={user.uid}
				             user={user}
				             backgroundColor={user.color} />)
		}
	</div>;

export default Participants;