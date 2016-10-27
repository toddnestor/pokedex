import { RECEIVE_ALL_POKEMON,
         REQUEST_ALL_POKEMON,
         RECEIVE_POKEMON_DETAIL,
         REQUEST_POKEMON_DETAIL,
         RECEIVE_POKEMON,
         CREATE_POKEMON,
         RECEIVE_POKEMON_ERRORS } from '../actions/pokemon_actions';

const LoadingReducer = (state = false, action) => {
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
    case REQUEST_POKEMON_DETAIL:
    case CREATE_POKEMON:
      return true;
    case RECEIVE_ALL_POKEMON:
    case RECEIVE_POKEMON_DETAIL:
    case RECEIVE_POKEMON:
    case RECEIVE_POKEMON_ERRORS:
      return false;
    default:
      return state;
  }
};

export default LoadingReducer;
