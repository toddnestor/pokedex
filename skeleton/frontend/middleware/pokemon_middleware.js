import { fetchAllPokemon, fetchPokemonDetail, createPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
         receiveAllPokemon,
         REQUEST_POKEMON_DETAIL,
         receivePokemonDetail,
         CREATE_POKEMON,
         receivePokemonErrors,
         receivePokemon} from '../actions/pokemon_actions';
import { hashHistory } from 'react-router';

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
    case CREATE_POKEMON:
      success = data => {
        if (data.id) {
          dispatch(receivePokemon(data));
          hashHistory.push(`/pokemon/${data.id}`);
        } else {
          dispatch(receivePokemonErrors(data));
        }
      };
      createPokemon(action.pokemon, success);
      break;
  }

  return next(action);
};

export default PokemonMiddleware;
