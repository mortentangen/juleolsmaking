import React from 'react';
import BeerItem from './BeerItem/BeerItem';
import Participants from './Participants/Participants';
import { sortByScore } from '../../vote-service';
import Snow from 'react-snow-effect';
import getUsersWithVotes from './get-users-with-votes';
import './Board.css';

const Board = ({ beer, votesForYear, users, colors, shouldSnow }) => {
  const usersWithVotes = getUsersWithVotes(users, votesForYear);
  const usersWithColors = Object.values(usersWithVotes).map((user, index) => ({
    color: colors[index],
    ...user
  }));
  const sortedBeers = votesForYear ? sortByScore(votesForYear) : [];
  return (
    <div>
      <div className="Board_snow">{shouldSnow && <Snow />}</div>
      <Participants usersWithColors={usersWithColors} />
      <div>
        {sortedBeers.map(({ beerId }) => (
          <BeerItem
            key={beerId}
            beer={beer[beerId]}
            votes={votesForYear[beerId] || {}}
            usersWithColors={usersWithColors}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
