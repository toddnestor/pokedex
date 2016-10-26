import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
window._ = require('lodash');

// stuff just for testing
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
