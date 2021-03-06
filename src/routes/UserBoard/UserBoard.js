import React from 'react';
import User from '../../modules/User/User';
import UserBoardItem from './UserBoardItem/UserBoardItem';
import './UserBoard.css';
import connect from '../../connect';

const UserBoard = ({
  beer,
  history,
  match: {
    params: { currentYear }
  }
}) => {
  const beerList = Object.entries(beer)
    .map(keyValue => ({
      id: keyValue[0],
      ...keyValue[1]
    }))
    .filter(beer => beer.yearTasted === currentYear);

  return (
    <div>
      <div className="UserBoard_user">
        <User history={history} />
      </div>
      <div className="UserBoard_list">
        {beerList.map(beer => (
          <UserBoardItem key={beer.id} beer={beer} currentYear={currentYear} />
        ))}
      </div>
    </div>
  );
};

const setStateFromSnapshot = snapshot => (prevState, props) => ({
  beer: snapshot.val()
});

export default connect(
  'beer',
  () => 'beer',
  setStateFromSnapshot
)(UserBoard);
