import { RECEIVE_POKEMON_DETAIL } from '../actions/pokemon_actions';

const _defaultState = {
  moves: [],
  items: []
};

const PokemonDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POKEMON_DETAIL:
      return action.pokemonDetails;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
