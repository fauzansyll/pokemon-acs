export const nextPage = () => ({
  type: "NEXT_PAGE",
});

export const prevPage = () => ({
  type: "PREV_PAGE",
});

export const setPokemonList = (pokemonList) => ({
  type: "SET_POKEMON_LIST",
  payload: pokemonList,
});

export const setPokemonDetails = (pokemonDetails) => ({
  type: "SET_POKEMON_DETAILS",
  payload: pokemonDetails,
});

export const setActiveCard = (name) => ({
  type: "SET_ACTIVE_CARD",
  payload: name,
});

export const setSearchText = (text) => ({
  type: "SET_SEARCH_TEXT",
  payload: text,
});

export const setSelectedCategory = (category) => ({
  type: "SET_SELECTED_CATEGORY",
  payload: category,
});

export const setSelectedType = (type) => ({
  type: "SET_SELECTED_TYPE",
  payload: type,
});

export const selectedAbi = (ability) => ({
  type: "SET_ABI",
  payload: ability,
});
export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const setSortOrder = (order) => ({
  type: "SET_SORT_ORDER",
  payload: order,
});

export const sortOrder = (order) => ({
  type: "SET_ORDER",
  payload: order,
});

export const setTypes = (types) => ({
  type: "SET_TYPES",
  payload: types,
});

export const setLogin = (account) => ({
  type: "SET_LOGIN",
  payload: account,
});

export const setAbilities = (abilities) => ({
  type: "SET_ABILITY",
  payload: abilities,
});
