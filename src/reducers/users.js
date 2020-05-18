import { RECEIVE_USERS, SAVE_USER_QUESTION, SAVE_USER_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {

    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }

    case SAVE_USER_QUESTION:

      const { authedUser, questionId } = action;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([questionId]),
        }
      }

    case SAVE_USER_ANSWER:

      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            ...action.payload,
          },
        }
      }

    default:
      return state;
  }
}