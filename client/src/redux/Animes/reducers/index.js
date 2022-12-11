import {
  GET_ANIMES,
  GET_ANIME_BY_ID,
  GET_ANIME_EPISODES,
  SEARCH_ANIMES,
} from "../types";

const initialState = {
  animes: [],
  anime: [],

  isActive: false,

  animeDetails: [],
  animeEpisodes: [],
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
    case GET_ANIME_BY_ID:
      return {
        ...state,
        animeDetails: action.payload,
      };
    case GET_ANIME_EPISODES:
      return {
        ...state,
        animeEpisodes: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
