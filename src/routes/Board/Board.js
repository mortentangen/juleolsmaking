import React, { useState } from 'react';
import BoardItem from './BoardItem/BoardItem';
import Participants from './Participants/Participants';
import { sortByScore } from '../../vote-service';
import Snow from 'react-snow-effect';
import getUsersWithVotes from './get-users-with-votes';
import Toggle from '../../modules/Toggle/Toggle';
import FilterPanel from './FilterPanel/FilterPanel';
import './Board.css';

const Board = ({
  beer,
  votesForYear,
  users,
  colors,
  shouldSnow,
  currentYear
}) => {
  const usersWithVotes = getUsersWithVotes(users, votesForYear);
  const usersWithColors = Object.values(usersWithVotes).map((user, index) => ({
    color: colors[index],
    ...user
  }));
  
  const [lukt, setLukt] = useState(true);
  const [munnfolelse, setMunnfolelse] = useState(true);
  const [ettersmak, setEttersmak] = useState(true);
  const [smak, setSmak] = useState(true);
  const filter = { lukt, munnfolelse, ettersmak, smak };
  
  const sortedBeers = votesForYear ? sortByScore(votesForYear, filter) : [];
  return (
    <div>
      <div className="Board_snow">{shouldSnow && <Snow />}</div>
      <Participants usersWithColors={usersWithColors} />
      <div className="Board_filterPanel">
        <Toggle>
          <FilterPanel
            filter={filter}
            setEttersmak={() => setEttersmak(!ettersmak)}
            setMunnfolelse={() => setMunnfolelse(!munnfolelse)}
            setLukt={() => setLukt(!lukt)}
            setSmak={() => setSmak(!smak)}
          />
        </Toggle>
      </div>
      <div>
        {sortedBeers.map(({ beerId }) => (
          <BoardItem
            key={beerId}
            beer={beer[beerId]}
            votes={votesForYear[beerId] || {}}
            usersWithColors={usersWithColors}
            currentYear={currentYear}
            filter={filter}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
