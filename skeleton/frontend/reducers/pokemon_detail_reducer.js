import { RECEIVE_POKEMON_DETAIL } from '../actions/pokemon_actions';

const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POKEMON_DETAIL:
      return action.pokemonDetails;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
