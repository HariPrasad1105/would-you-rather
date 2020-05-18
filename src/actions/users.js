export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_QUESTION = "ADD_USER_QUESTION";
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export const saveUserQuestion = (authedUser, questionId) => {
  return {
    type: SAVE_USER_QUESTION,
    authedUser,
    questionId,
  }
}

export const saveUserAnswer = (authedUser, questionId, selectedOption) => {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    payload: {
      [questionId]: selectedOption,
    },
  }
}

export const handleSaveUserQuestion = (authedUser, questionId) => {
  return (dispatch) => {
    dispatch(saveUserQuestion(authedUser, questionId));
  }
}

export const handleUserAnswer = (authedUser, questionId, selectedOption) => {
  return (dispatch) => {
    dispatch(saveUserAnswer(authedUser, questionId, selectedOption));
  }
}

