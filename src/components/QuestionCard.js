import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import QuestionInfo from './QuestionInfo';
import AnswerQuestion from './AnswerQuestion';
import ViewPoll from './ViewPoll';

class QuestionCard extends Component {

  switchRender = (childComponent, questionId) => {
    switch (childComponent) {
      case 'QuestionInfo':
        return <QuestionInfo questionId={questionId} />;

      case 'AnswerQuestion':
        return <AnswerQuestion questionId={questionId} />

      case 'ViewPoll':
        return <ViewPoll questionId={questionId} />

      default:
        break;
    }
  }

  render() {

    const { questionAuthorId, questionId, childComponent, cardTitle } = this.props;
    const imgSrc = require('../images/' + questionAuthorId + '.png');
    const containerWidth = childComponent === 'QuestionInfo'
      ? '100%'
      : '45%';

    return (
      <div style={{ marginBottom: '5%', width: `${containerWidth}` }} className="container">
        <Card border="success">
          <Card.Header style={{ textAlign: "left" }}>
            <strong>{cardTitle}</strong>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col sm={4}>
                <img
                  src={imgSrc}
                  height="135"
                  alt={`${questionAuthorId}`}
                />
              </Col>
              <Col sm={8} style={{ textAlign: 'left', borderLeft: '1px solid #d3d3d3' }}>
                {
                  this.switchRender(childComponent, questionId)
                }
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { questionId, childComponent }) => {

  const questionAuthorId = questions[questionId].author;
  const questionAuthorName = users[questionAuthorId].name;
  const authedUserAnswered = Object.keys(users[authedUser].answers).includes(questionId);
  const cardTitle = !authedUserAnswered
    ? `${questionAuthorName} asks:`
    : `Asked by ${questionAuthorName}`;

  return {
    questionAuthorId,
    questionAuthorName,
    questionId,
    cardTitle,
    childComponent,
  };

}

export default withRouter(connect(mapStateToProps)(QuestionCard));
