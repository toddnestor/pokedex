import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({ pokemon, router }) => {
  const handleClick = url => e => router.push(url);

  return (
    <li
      onClick={handleClick(`/pokemon/${pokemon.id}`)}
      className="pokemon-index-item">
      <img className="thumb" src={pokemon.image_url}/> {pokemon.name}
    </li>
  );
};

export default withRouter(PokemonIndexItem);
