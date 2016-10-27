export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const REQUEST_ALL_POKEMON = 'REQUEST_ALL_POKEMON';
export const RECEIVE_POKEMON_DETAIL = 'RECEIVE_POKEMON_DETAIL';
export const REQUEST_POKEMON_DETAIL = 'REQUEST_POKEMON_DETAIL';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

export const receivePokemonDetail = pokemonDetails => ({
  type: RECEIVE_POKEMON_DETAIL,
  pokemonDetails
});

export const requestPokemonDetail = id => ({
  type: REQUEST_POKEMON_DETAIL,
  id
});

export const createPokemon = pokemon => ({
  type: CREATE_POKEMON,
  pokemon
});

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const receivePokemonErrors = errors => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
