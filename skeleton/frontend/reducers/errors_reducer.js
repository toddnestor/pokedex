import { RECEIVE_POKEMON_ERRORS, CLEAR_ERRORS } from '../actions/pokemon_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
