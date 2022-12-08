import { GET_ANIMES } from "../types";

const initialState = {
  allAnimes: [],
  animes: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANIMES: {
      return {
        ...state,
        animes: action.payload,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
