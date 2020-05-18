import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Nav, Row, Col, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {

  render() {

    let { authedUser } = this.props;

    return (
      <div className="header">

        <Row>
          <Col>
            <Navbar.Brand className="navbar-brand">Would You Rather?</Navbar.Brand>
          </Col>
          <Col xs={6}>
            <div>
              <Nav variant="tabs">

                <Nav.Item>
                  <NavLink tag={Link} to="/" className="nav-link">
                    <span>Home</span>
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink tag={Link} to="/add" className="nav-link">
                    <span>New Question</span>
                  </NavLink>
                </Nav.Item>

                <Nav.Item className="mr-auto">
                  <NavLink tag={Link} to="/leaderboard" className="nav-link">
                    <span>Leaderboard</span>
                  </NavLink>
                </Nav.Item>

                {
                  authedUser && (
                    <Fragment>
                      <Nav.Item>
                        <div className="form-inline" style={{ marginTop: '2%' }}>
                          <p style={{ paddingRight: '15px' }}>Hello, {this.props.username}</p>

                          <img
                            src={require('../images/' + authedUser + '.png')}
                            alt="avatar"
                            height="35"
                            className="rounded-circle"
                          />
                        </div>
                      </Nav.Item>

                      <Nav.Item>
                        <NavLink tag={Link} to="/logout" className="nav-link">
                          <span>Logout</span>
                        </NavLink>
                      </Nav.Item>

                    </Fragment>
                  )

                }

              </Nav>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <hr className="header-bottom-border" />
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {

  return {
    authedUser,
    username: authedUser
      ? users[authedUser].name
      : null,
  }
}

export default connect(mapStateToProps)(Header);