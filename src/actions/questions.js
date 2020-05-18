import * as DATA from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = 'ADD_QUESTION';
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED';

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export const handleReceiveQuestions = () => {
  return (dispatch) => {

    dispatch(showLoading());

    DATA._getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      });

  }
}

export const handleSaveQuestion = (formattedQuestion) => {
  return (dispatch) => {
    dispatch(addQuestion(formattedQuestion));
  }
}

export const addQuestion = (formattedQuestion) => {
  return {
    type: ADD_QUESTION,
    formattedQuestion
  }
}

export const handleAddUserToAnsweredBy = (authedUser, questionId, selectedOption) => {
  return (dispatch) => {
    dispatch(addUserToAnsweredBy(authedUser, questionId, selectedOption));
  }
}

export const addUserToAnsweredBy = (authedUser, questionId, selectedOption) => {
  return {
    type: QUESTION_ANSWERED,
    authedUser,
    questionId,
    selectedOption,
  }
}