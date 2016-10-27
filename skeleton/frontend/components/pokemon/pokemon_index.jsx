import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({ pokemon, children, loading }) => (
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
      <img src={'/assets/pokemon_spinner.gif'} className="loading" style={{display: loading ? 'block' : 'none'}} />
      <div style={{display: loading ? 'none' : 'block'}}>
        { children }
      </div>
    </section>
  </section>
);

export default PokemonIndex;
