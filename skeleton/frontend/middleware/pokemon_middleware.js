import { fetchAllPokemon, fetchPokemonDetail } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
         receiveAllPokemon,
         REQUEST_POKEMON_DETAIL,
         receivePokemonDetail } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  let success;
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      success = data => dispatch(receiveAllPokemon(data));
      fetchAllPokemon(success);
      break;
    case REQUEST_POKEMON_DETAIL:
      success = data => dispatch(receivePokemonDetail(data));
      fetchPokemonDetail(action.id, success);
      break;
  }

  return next(action);
};

export default PokemonMiddleware;
