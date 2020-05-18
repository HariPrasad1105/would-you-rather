import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Card, Col } from 'react-bootstrap';
import { FaTrophy } from 'react-icons/fa'

class LeaderboardCard extends Component {

  render() {

    console.log(this.props);

    const {
      user,
      userName,
      trophyColor,
      userAnsweredQuestions,
      userAskedQuestions
    } = this.props;

    const imgSrc = require('../images/' + user + '.png');

    return (
      <div className="container" style={{ width: '50%', marginBottom: '2%' }}>
        <Card body border="success">
          <Row>
            <Col sm={3} >

              <span style={{ float: "left" }}>
                <FaTrophy style={{ color: trophyColor, fontSize: '20px' }} />
              </span>

              <img
                src={imgSrc}
                height="135"
                alt={`${user}`}
              />
            </Col>
            <Col sm={6} style={{ textAlign: 'left', borderLeft: '1px solid #d3d3d3', borderRight: '1px solid #d3d3d3' }}>
              <h3>{userName}</h3>
              <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <span>
                  Answered questions:
                </span>
                <span style={{ float: 'right' }}>
                  {userAnsweredQuestions}
                </span>
              </div>

              <div style={{ borderTop: '1px solid #d3d3d3', }} />

              <div style={{ marginTop: '5%' }}>
                <span>
                  Created questions:
                </span>
                <span style={{ float: 'right' }}>
                  {userAskedQuestions}
                </span>
              </div>
            </Col>
            <Col sm={3} >
              <Card border="secondary">
                <Card.Header>Score</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <h1>{userAnsweredQuestions + userAskedQuestions}</h1>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }

}

const mapStateToProps = ({ users }, { user, trophyColor }) => {

  const userName = users[user].name;
  const userAnsweredQuestions = Object.keys(users[user].answers).length;
  const userAskedQuestions = users[user].questions.length;

  return {
    userName,
    user,
    trophyColor,
    userAnsweredQuestions,
    userAskedQuestions,
  };
}

export default connect(mapStateToProps)(LeaderboardCard);