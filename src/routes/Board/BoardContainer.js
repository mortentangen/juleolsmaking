import React, { Component } from 'react';
import connect from '../../connect';
import Board from './Board';

const colors = ['#0D5901', '#ccc', '#cc9900', 'black', 'navy'];

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { snow: false };
    setInterval(
      () => this.setState(state => ({ snow: new Date().getMinutes() > 44 })),
      60000
    );
  }

  render() {
    const { beer, votes, users } = this.props;
    const { currentYear } = this.props.match.params;
    return (
      <Board
        beer={beer}
        votesForYear={votes[currentYear]}
        users={users}
        colors={colors}
        shouldSnow={this.state.snow}
        currentYear={currentYear}
      />
    );
  }
}

const setStateFromSnapshotForBeer = snapshot => () => ({
  beer: snapshot.val()
});
const setStateFromSnapshotForVotes = snapshot => () => ({
  votes: snapshot.val()
});
const setStateFromSnapshotForUsers = snapshot => () => ({
  users: snapshot.val() || {}
});

export default connect(
  'votes',
  () => 'votes',
  setStateFromSnapshotForVotes
)(
  connect(
    'beer',
    () => 'beer',
    setStateFromSnapshotForBeer
  )(
    connect(
      'users',
      () => 'users',
      setStateFromSnapshotForUsers
    )(BoardContainer)
  )
);
