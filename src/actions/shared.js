import { _getUsers } from '../utils/_DATA';
import { receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading';
import { handleReceiveQuestions } from './questions';

export default function handleInitialData() {
  return (dispatch) => {

    dispatch(showLoading());

    return _getUsers()
      .then((users) => {
        dispatch(receiveUsers(users));
        dispatch(hideLoading());
        dispatch(handleReceiveQuestions());
      });

  }
}
