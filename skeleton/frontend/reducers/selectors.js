export const selectAllPokemon = state => _.values(state.pokemon);

export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
  if( pokemonDetail.items ) {
    let item = _.find(pokemonDetail.items, {id: parseInt(itemId)});
    return item;
  } else {
    return {};
  }
};
