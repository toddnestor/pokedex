import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon, requestPokemonDetail } from '../actions/pokemon_actions';

const Root = ({ store }) => {
  const requestAllPokemonOnEnter = nextState => {
    store.dispatch(requestAllPokemon());
  };

  const requestPokemonDetailOnEnter = router => {
    store.dispatch(requestPokemonDetail(router.params.id));
  };

  return (
    <Provider store={store} >
      <Router history={hashHistory}>
        <Route path="/"
               component={PokemonIndexContainer}
               onEnter={requestAllPokemonOnEnter}>
               <Route path="pokemon/:id"
                 component={PokemonDetailContainer}
                 onEnter={requestPokemonDetailOnEnter} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
