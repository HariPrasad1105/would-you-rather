import { Route, withRouter, Switch } from "react-router";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import React from 'react';
import QuestionsDashboard from './QuestionsDashboard';
import ViewQuestion from './ViewQuestion';
import Error from './404';
import { connect } from "react-redux";
import Logout from './Logout';


const AppRouter = () => {

  return (
    <div>
      <Switch>
        <Route path="/" exact component={QuestionsDashboard} />
        <Route path="/add" component={NewQuestion} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/questions/:question_id" component={ViewQuestion} />
        <Route path="/logout" component={Logout} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default withRouter(connect()(AppRouter));