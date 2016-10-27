import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({ pokemon, children, loading }) => (
  <section className="pokedex">
    <aside>
      <ul>
        {
          pokemon.map((poke, idx) => <PokemonIndexItem key={poke.id} number={idx + 1} pokemon={poke} />)
        }
      </ul>
    </aside>
    <section className="main-content-area">
      <img src={'/assets/pokemon_spinner.gif'} className="loading" style={{display: loading ? 'block' : 'none'}} />
      <div style={{display: loading ? 'none' : 'block'}}>
        { children }
      </div>
    </section>
  </section>
);

export default PokemonIndex;
