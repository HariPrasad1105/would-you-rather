import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Form } from 'react-bootstrap';
import * as DATA from '../utils/_DATA';
import { handleSaveQuestion } from '../actions/questions';
import { handleSaveUserQuestion } from '../actions/users';
import { withRouter } from 'react-router';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

class NewQuestion extends Component {

  state = {
    "optionOne": '',
    "optionTwo": '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      dispatch,
      authedUser
    } = this.props;

    let question = {
      "author": this.props.authedUser,
      "optionOneText": this.state.optionOne,
      "optionTwoText": this.state.optionTwo,
    }

    DATA._saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(showLoading());
        dispatch(handleSaveQuestion(formattedQuestion));
        dispatch(handleSaveUserQuestion(authedUser, formattedQuestion.id));
        dispatch(hideLoading());
      })
      .then(this.props.history.push("/"));
  }

  render() {
    return (

      <div className="container" style={{ width: '40%' }} >
        <Card border="success">
          <Card.Header as="h5">
            Create NewQuestion
          </Card.Header>
          <Card.Body style={{ textAlign: "left" }}>
            <Card.Title as="h6">Complete the question</Card.Title>
            <Card.Title as="h4">Would you rather...</Card.Title>

            <Form>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter option one text here"
                  name="optionOne"
                  value={this.state.optionOne}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <div style={{
                width: '100%',
                borderBottom: '1px solid #d3d3d3',
                textAlign: "center",
                height: "20px",
                marginTop: '5%',
                marginBottom: '5%',
              }}>
                <span style={{ fontSize: '15px', backgroundColor: 'white' }}>
                  OR
                </span>
              </div>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Enter option two text here"
                  name="optionTwo"
                  value={this.state.optionTwo}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button
                type="submit"
                onClick={this.handleSubmit}
                style={{ width: '100%', backgroundColor: '#31bea6' }}
              >
                Submit
              </Button>

            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));