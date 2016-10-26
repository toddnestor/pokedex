import { fetchAllPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  let success;
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      success = data => dispatch(receiveAllPokemon(data));
      fetchAllPokemon(success);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
