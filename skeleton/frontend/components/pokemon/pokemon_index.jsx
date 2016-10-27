import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({ pokemon, children }) => (
  <section className="pokedex">
    <aside>
      <ol>
        <li><a href="#/">Create New Pokemon</a></li>
        {
          pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)
        }
      </ol>
    </aside>
    <section className="main-content-area">
      { children }
    </section>
  </section>
);

export default PokemonIndex;
