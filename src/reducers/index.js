import { authedUser } from './authedUser';
import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
}); 