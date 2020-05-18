import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardCard from './LeaderboardCard';

class Leaderboard extends Component {
  render() {

    const trophyColors = ["#FFDF00", "#0000FF", "#000000"];
    const { usersSortedByRank } = this.props;

    return (
      usersSortedByRank.map(
        (user, index) => <LeaderboardCard
          key={user}
          user={user}
          trophyColor={trophyColors[index]}
        />
      )
    );
  }
}

const mapStateToProps = ({ users }) => {

  const usersSortedByRank = Object.keys(users).sort(
    (a, b) => (
      (Object.keys(users[b].answers).length + users[b].questions.length) -
      (Object.keys(users[a].answers).length + users[a].questions.length)
    )
  )

  return {
    usersSortedByRank,
  }
}

export default connect(mapStateToProps)(Leaderboard);