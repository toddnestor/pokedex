import React from 'react';

const PokemonIndex = ({ pokemon }) => (
  <div>
    Are we here?
    <ol>
      {
        pokemon.map(poke => <li key={poke.id}> <img className="thumb" src={poke.image_url}/> {poke.name}</li>)
      }
    </ol>
  </div>
);

export default PokemonIndex;