import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { handleUserAnswer } from '../actions/users';
import { handleAddUserToAnsweredBy } from '../actions/questions';

class AnswerQuestion extends Component {

  state = {
    selectedOption: "optionOne",
  }

  handleChange = (e) => {

    this.setState({
      selectedOption: e.target.name
    });
  }

  handleClick = (e, questionId) => {
    e.preventDefault();

    const { dispatch, authedUser } = this.props;
    const { selectedOption } = this.state;

    dispatch(showLoading());
    dispatch(handleUserAnswer(authedUser, questionId, selectedOption));
    dispatch(handleAddUserToAnsweredBy(authedUser, questionId, selectedOption));
    dispatch(hideLoading());
  }

  render() {

    const { questionId, optionOne, optionTwo } = this.props;

    return (
      <div>
        <h4>Would you rather</h4>

        <Fragment>
          <input
            type="radio"
            value={optionOne}
            name="optionOne"
            id="optionOne"
            checked={this.state.selectedOption === "optionOne"}
            onChange={this.handleChange}
          /> {optionOne}

          <br />

          <input
            type="radio"
            value={optionTwo}
            name="optionTwo"
            id="optionTwo"
            checked={this.state.selectedOption === "optionTwo"}
            onChange={this.handleChange}
          /> {optionTwo}
        </Fragment>

        <Button
          className="view-poll-btn"
          onClick={(e) => this.handleClick(e, questionId)}
          style={{ marginTop: '5%' }}
        >
          Submit Answer
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { questionId }) => {
  const optionOne = questions[questionId].optionOne.text;
  const optionTwo = questions[questionId].optionTwo.text;

  return {
    authedUser,
    questionId,
    optionOne,
    optionTwo,
  }

}

export default connect(mapStateToProps)(AnswerQuestion);