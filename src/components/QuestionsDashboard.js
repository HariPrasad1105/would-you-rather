import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Nav } from 'react-bootstrap';
import QuestionCard from './QuestionCard';

class QuestionsDashboard extends Component {

  state = {
    activeQuestionPill: 'unanswered',
  }

  handleClick = (navTabName) => {
    this.setState({
      activeQuestionPill: navTabName,
    })
  }

  render() {

    return (
      <div className="container" style={{ width: '45%', marginTop: '6%' }}>
        <Card className="question-dashboard" border="success">
          <Card.Header className="question-dashboard-header">
            <Nav fill variant="pills"
              defaultActiveKey={`#${this.state.activeQuestionPill}`}
            >
              <Nav.Item>
                <Nav.Link
                  href="#unanswered"
                  onClick={() => this.handleClick("unanswered")}
                >
                  Unanswered Questions
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#answered"
                  onClick={() => this.handleClick("answered")}
                >
                  Answered Questions
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>

            {
              this.state.activeQuestionPill === 'answered'
                ? (
                  this.props.answeredQuestions.map(
                    (questionId) => (
                      <QuestionCard
                        key={questionId}
                        questionId={questionId}
                        childComponent="QuestionInfo"
                      />)
                  )
                )
                : (
                  this.props.unAnsweredQuestions.map(
                    (questionId) => (
                      <QuestionCard
                        key={questionId}
                        questionId={questionId}
                        childComponent="QuestionInfo"
                      />)
                  )
                )
            }
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }) => {

  const allQuestions = Object.keys(questions);
  const answeredQuestions = Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unAnsweredQuestions = allQuestions.filter(
    (question) => !answeredQuestions.includes(question)
  ).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  return {
    authedUser,
    answeredQuestions,
    unAnsweredQuestions,
  }

}

export default connect(mapStateToProps)(QuestionsDashboard);