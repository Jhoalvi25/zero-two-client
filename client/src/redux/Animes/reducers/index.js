import { GET_ANIMES, SEARCH_ANIMES } from "../types";

const initialState = {
  animes: [],
  anime: [],
  isActive: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANIMES: {
      return {
        ...state,
        animes: action.payload.data,
        isActive: false,
      };
    }
    case SEARCH_ANIMES:
      return {
        ...state,
        anime: action.payload.data,
        isActive: true,
      };
    default:
      return state;
  }
}

export default rootReducer;
