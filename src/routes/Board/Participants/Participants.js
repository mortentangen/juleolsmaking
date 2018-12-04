import React from 'react';
import Participant from './Participant/Participant';
import './Participants.css';

const Participants = ({ usersWithColors }) => (
  <div className="Participants_container">
    {usersWithColors.map(user => (
      <Participant key={user.uid} user={user} backgroundColor={user.color} />
    ))}
  </div>
);

export default Participants;
