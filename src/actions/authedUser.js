import { showLoading, hideLoading } from 'react-redux-loading';

export const LOGIN_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const setAuthedUser = (id) => {
  return {
    type: LOGIN_USER,
    id
  }
}

export const handleSetAuthedUser = (id) => {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(setAuthedUser(id));
    dispatch(hideLoading());
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  }
}

export const handleLogoutUser = () => {
  console.log("something");
  return (dispatch) => {
    dispatch(logoutUser());
  }
}