const initialState = {
  count: 0,
  pokemonList: [],
  pokemonDetails: [],
  activeCard: null,
  searchText: "",
  selectedCategory: "",
  selectedType: "",
  categories: [],
  types: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "PREV_PAGE":
      return {
        ...state,
        count: state.count - 1,
      };
    case "SET_POKEMON_LIST":
      return {
        ...state,
        pokemonList: action.payload,
      };
    case "SET_POKEMON_DETAILS":
      return {
        ...state,
        pokemonDetails: action.payload,
      };
    case "SET_ACTIVE_CARD":
      return {
        ...state,
        activeCard: action.payload,
      };
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload,
      };
    case "SET_SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case "SET_SELECTED_TYPE":
      return {
        ...state,
        selectedType: action.payload,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "SET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "SET_ABILITY":
      return {
        ...state,
        abilities: action.payload,
      };
    case "SET_SELECTED_ABILITY":
      return {
        ...state,
        selectedAbility: action.payload,
      };
    case "SET_ABI":
      return {
        ...state,
        abi: action.payload,
      };
    case "SET_LOGIN":
      return {
        ...state,
        account: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
