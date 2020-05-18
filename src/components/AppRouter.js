import { Route, withRouter } from "react-router";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import React from 'react';
import QuestionsDashboard from './QuestionsDashboard';
import ViewQuestion from './ViewQuestion';
import Error from './404';
import { connect } from "react-redux";
import Logout from './Logout';


const AppRouter = (props) => {

  return (

    <div>
      <Route path="/" exact component={QuestionsDashboard} />
      <Route path="/add" component={NewQuestion} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/questions/:question_id" component={ViewQuestion} />
      <Route path="/404" component={Error} />
      <Route path="/logout" component={Logout} />
    </div>

  );
}

export default withRouter(connect()(AppRouter));