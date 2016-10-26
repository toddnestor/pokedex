import React from 'react';

const PokemonDetail = ({ pokemonDetail, children, router }) => {
  const handleClick = id => e => router.push(`/pokemon/${pokemonDetail.id}/item/${id}`);

  return (
    <article className="pokemon-detail">
      <img src={pokemonDetail.image_url}/>
      <h3>{pokemonDetail.name}</h3>
      <h5>Type: {pokemonDetail.poke_type}</h5>
      <h5>Attack: {pokemonDetail.attack}</h5>
      <h5>Defense: {pokemonDetail.defense}</h5>
      <h5>Moves: "{pokemonDetail.moves ? pokemonDetail.moves.join(', ') : "" }"</h5>
      <h4>Items: {
          pokemonDetail.items ?
            pokemonDetail.items.map(item => <img onClick={handleClick(item.id)} key={item.id} src={item.image_url}/>) :
            ""
          }
      </h4>
      { children }
    </article>
  );
};

export default PokemonDetail;
