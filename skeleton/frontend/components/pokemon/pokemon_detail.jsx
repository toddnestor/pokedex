import React from 'react';

const PokemonDetail = ({ pokemonDetail }) => {
  console.log(pokemonDetail);

  return (
  <article className="pokemon-detail">
    <img src={pokemonDetail.image_url}/>
    <h3>{pokemonDetail.name}</h3>
    <h5>Type: {pokemonDetail.poke_type}</h5>
    <h5>Attack: {pokemonDetail.attack}</h5>
    <h5>Defense: {pokemonDetail.defense}</h5>
    
    <h4>Items: </h4>

  </article>
)};

export default PokemonDetail;
