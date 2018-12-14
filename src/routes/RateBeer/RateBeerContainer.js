import React from 'react';
import { fire } from '../../fire';
import connect from '../../connect';
import RateBeer from './RateBeer';

const RateBeerContainer = props => (
  <RateBeer {...props} saveRating={saveRating} />
);

const getUserVoteRef = (currentYear, beerId) =>
  `votes/${currentYear}/${beerId}/${fire.auth().currentUser.uid}`;

const saveRating = (currentYear, beerId, aspect, rate) => {
  fire
    .database()
    .ref(`${getUserVoteRef(currentYear, beerId)}`)
    .update({
      [aspect]: rate.rating
    });
};

const firebaseBeerRef = props => `beer/${props.match.params.beerId}`;

const setStateFromSnapshotForBeer = snapshot => () => ({
  beer: { ...snapshot.val(), id: snapshot.key }
});

const firebaseVoteRef = props => {
  const { currentYear, beerId } = props.match.params;
  return getUserVoteRef(currentYear, beerId);
};
const setStateFromSnapshotForVote = snapshot => () => ({
  vote: snapshot.val() || {}
});

export default connect(
  'vote',
  firebaseVoteRef,
  setStateFromSnapshotForVote
)(
  connect(
    'beer',
    firebaseBeerRef,
    setStateFromSnapshotForBeer
  )(RateBeerContainer)
);
