import { withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { handleLogoutUser } from '../actions/authedUser';
import React, { Component } from 'react';

class Logout extends Component {

  componentWillMount() {
    this.props.dispatch(handleLogoutUser());
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }

}

export default withRouter(connect()(Logout));