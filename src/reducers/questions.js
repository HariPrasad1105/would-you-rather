import { RECEIVE_QUESTIONS, ADD_QUESTION, QUESTION_ANSWERED } from '../actions/questions';

const questions = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_QUESTIONS:

      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTION:

      return {
        ...state,
        [action.formattedQuestion.id]: {
          ...action.formattedQuestion,
        }
      }

    case QUESTION_ANSWERED:

      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.selectedOption]: {
            ...state[action.questionId][action.selectedOption],
            votes: state[action.questionId][action.selectedOption].votes.concat([action.authedUser])
          }
        }
      }

    default:
      return state;
  }

}

export default questions;