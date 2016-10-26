const defaultError = data => console.log(data);

export const fetchAllPokemon = (success, error = defaultError) => {
  $.ajax({
    method: "GET",
    url: "/api/pokemon",
    success,
    error
  });
};
