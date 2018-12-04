import React from 'react';
import BeerItem from './BeerItem/BeerItem';
import Participants from './Participants/Participants';
import { sortByScore } from '../../vote-service';
import Snow from 'react-snow-effect';
import './Board.css';

const Board = ({ beer, votes, users, colors, shouldSnow }) => {
  const usersWithColors = Object.values(users).map((user, index) => ({
    color: colors[index],
    ...user
  }));
  const sortedBeers = votes ? sortByScore(votes) : [];
  return (
    <div>
      <div className="Board_snow">{shouldSnow && <Snow />}</div>
      <Participants usersWithColors={usersWithColors} />
      <div>
        {sortedBeers.map(({ beerId }) => (
          <BeerItem
            key={beerId}
            beer={beer[beerId]}
            votes={votes[beerId] || {}}
            usersWithColors={usersWithColors}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
