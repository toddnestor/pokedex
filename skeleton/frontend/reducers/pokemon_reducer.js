import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON:
      let duped = _.merge({}, state);
      duped[action.pokemon.id] = action.pokemon;
      return duped;
    default:
      return state;
  }
};

export default PokemonReducer;
