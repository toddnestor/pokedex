const defaultError = data => console.log(data);

export const fetchAllPokemon = (success, error = defaultError) => {
  $.ajax({
    method: "GET",
    url: "/api/pokemon",
    success,
    error
  });
};

export const fetchPokemonDetail = (id, success, error = defaultError) => {
  $.ajax({
    method: "GET",
    url: `/api/pokemon/${id}`,
    success,
    error
  });
};

export const createPokemon = (pokemon, success, error = defaultError) => {
  $.ajax({
    method: "POST",
    url: '/api/pokemon',
    data: { pokemon },
    success,
    error
  });
};
