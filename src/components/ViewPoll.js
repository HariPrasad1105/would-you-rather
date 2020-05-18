import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, ProgressBar } from 'react-bootstrap';

class ViewPoll extends Component {

  render() {

    console.log(this.props);

    const {
      numberOfVotes, optionOne,
      optionOneVotes, optionTwo,
      optionTwoVotes, userSelectedOption,
    } = this.props;

    const optionOneProgressBarLabel = Math.round((optionOneVotes / numberOfVotes) * 100);
    const optionTwoProgressBarLabel = Math.round((optionTwoVotes / numberOfVotes) * 100);

    return (
      <div>
        <h4>Result: </h4>

        <Card body>
          <strong>
            <span style={{ color: "#31bea6", }}>
              Would you rather {optionOne}?
            </span>
          </strong>
          <ProgressBar
            now={optionOneProgressBarLabel}
            label={`${optionOneProgressBarLabel}%`}
            style={{
              height: '5%',
            }}
          />
          <span style={{}}>
            <strong>
              {optionOneVotes} out of {numberOfVotes}
            </strong>
          </span>

          <span>
            {userSelectedOption === "optionOne" && (
              <p className="text-danger">Your Vote</p>
            )}
          </span>
        </Card>

        <Card body style={{ marginTop: '5%' }}>
          <strong>
            <span style={{ color: "#31bea6" }}>
              Would you rather {optionTwo}?
            </span>
          </strong>
          <ProgressBar
            now={optionTwoProgressBarLabel}
            label={`${optionTwoProgressBarLabel}%`}
          />
          <strong>
            <span>
              {optionTwoVotes} out of {numberOfVotes}
            </span>
          </strong>

          <span>
            {userSelectedOption === "optionTwo" && (
              <p className="text-danger">Your Vote</p>
            )}
          </span>
        </Card>

      </div >
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { questionId }) => {
  const numberOfVotes = Object.keys(users).length;

  const optionOne = questions[questionId].optionOne.text;
  const optionOneVotes = questions[questionId].optionOne.votes.length;

  const optionTwo = questions[questionId].optionTwo.text;
  const optionTwoVotes = questions[questionId].optionTwo.votes.length;

  const userSelectedOption = users[authedUser].answers[questionId];

  return {
    numberOfVotes,
    optionOne,
    optionOneVotes,
    optionTwo,
    optionTwoVotes,
    userSelectedOption,
  }
}

export default connect(mapStateToProps)(ViewPoll);