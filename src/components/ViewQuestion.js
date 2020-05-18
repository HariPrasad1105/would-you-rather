import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';
import { Redirect, withRouter } from 'react-router';


export class ViewQuestion extends Component {
  render() {

    const { questionFound } = this.props;

    if (!questionFound) {
      return <Redirect to="/404" />;
    }

    return (
      this.props.authedUserAnswered
        ? <QuestionCard questionId={this.props.questionId} childComponent="ViewPoll" />
        : <QuestionCard questionId={this.props.questionId} childComponent="AnswerQuestion" />
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { match }) => {

  const questionId = match.params.question_id;
  const questionFound = questions.hasOwnProperty(questionId);
  const authedUserAnswered = Object.keys(users[authedUser].answers)
    .includes(questionId);

  return {
    questionId,
    authedUserAnswered,
    questionFound,
  }

}


export default withRouter(connect(mapStateToProps)(ViewQuestion));