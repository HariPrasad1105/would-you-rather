import React, { Component } from 'react';
import '../App.css';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import handleInitialData from '../actions/shared';
import AppRouter from './AppRouter';
import Header from './Header';
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {

    return (
      <div className="App" >
        <Router>
          <LoadingBar />
          <Header />
          {
            this.props.authedUser === null
              ? <Login />
              : <AppRouter />
          }
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return ({
    users,
    authedUser
  });
}


export default connect(mapStateToProps)(App);
