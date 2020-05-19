import React, { Component, Fragment } from 'react';
import { Form, Card, ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleSetAuthedUser } from '../actions/authedUser';
import { handleReceiveQuestions } from '../actions/questions';

class Login extends Component {

  state = {
    selectedUserName: '',
  }

  handleSelect = (e) => {
    this.setState({
      selectedUserName: e.target.value,
    });
  }

  handleOnClick = (e) => {
    e.preventDefault();

    if (this.state.selectedUserName !== "") {
      this.props.dispatch(handleSetAuthedUser(this.state.selectedUserName));
      this.props.dispatch(handleReceiveQuestions());
    }

  }

  render() {

    const { users } = this.props;

    return (
      <div>

        <div className="container">
          <div className="login-container">
            <Card>
              <Card.Header>
                <Fragment>
                  <strong>Welcome to the Would You Rather App!</strong>
                  <p>Please sign in to continue</p>
                </Fragment>
              </Card.Header>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <img
                    className="react-redux-icon"
                    src={require('../images/react-redux-icon.jpeg')}
                    alt="react-redux-avatar"
                    height="150"
                  />

                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label className="form-label">Sign in</Form.Label>
                      <Form.Control as="select" onChange={this.handleSelect}>
                        <option>Select User</option>
                        {
                          users.map((user) => (
                            <option key={user} value={user}>
                              {user}
                            </option>
                          ))
                        }
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Button
                        type="submit"
                        style={{ width: '100%', backgroundColor: '#31bea6' }}
                        onClick={this.handleOnClick}
                      >
                        Sign in
                      </Button>
                    </Form.Group>
                  </Form>

                </ListGroup.Item>
              </ListGroup>

            </Card>

          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ users }) => {
  return ({
    users: Object.keys(users),
  });
}


export default connect(mapStateToProps)(Login);