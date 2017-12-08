import React from 'react';
import './Participant.css';

const Participant = ({ user, backgroundColor }) =>
	<div className="Participant_container" style={{ backgroundColor }}>
		<img className="Participant_googlePhoto" src={user.photoURL} alt="profilbilde" />
	</div>;

export default Participant;