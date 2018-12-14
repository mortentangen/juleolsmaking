import React, { useState } from 'react';
import BoardItem from './BoardItem/BoardItem';
import Participants from './Participants/Participants';
import { sortByScore } from '../../vote-service';
import Snow from 'react-snow-effect';
import getUsersWithVotes from './get-users-with-votes';
import FilterPanel from './FilterPanel/FilterPanel';
import './Board.css';

const Board = ({ beer, votesForYear, users, colors, shouldSnow, currentYear }) => {
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
      <FilterPanel/>
      <div>
        {sortedBeers.map(({ beerId }) => (
          <BoardItem
            key={beerId}
            beer={beer[beerId]}
            votes={votesForYear[beerId] || {}}
            usersWithColors={usersWithColors}
            currentYear={currentYear}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
