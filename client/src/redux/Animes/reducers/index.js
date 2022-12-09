import { GET_ANIMES, SEARCH_ANIMES } from "../types";

const initialState = {
  animes: [],
  anime: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANIMES: {
      return {
        ...state,
        animes: action.payload.data,
      };
    }
    case SEARCH_ANIMES:
      return {
        ...state,
        anime: action.payload.data,
      };
    default:
      return state;
  }
}

export default rootReducer;
