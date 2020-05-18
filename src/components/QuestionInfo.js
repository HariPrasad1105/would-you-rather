import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class QuestionInfo extends Component {

  handleClick = (e, questionId) => {
    e.preventDefault();

    this.props.history.push(`/questions/${questionId}`);
  }

  render() {

    const { questionOptionOne, questionId } = this.props;

    return (
      <Fragment>
        <h4>Would you rather</h4>
        <p style={{ MarginTop: '0.5em', marginBottom: '1.5em' }}>
          ..{questionOptionOne.slice(0, 10)}..
        </p>
        <Button
          className="view-poll-btn"
          onClick={(e) => this.handleClick(e, questionId)}
        >
          View Poll
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ questions }, { questionId }) => {
  const questionOptionOne = questions[questionId].optionOne.text;

  return {
    questionOptionOne,
    questionId,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionInfo));