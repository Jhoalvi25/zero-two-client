import { GET_ANIMES, GET_ANIME_BY_ID, GET_ANIME_EPISODES, SEARCH_ANIMES } from "../types";

const initialState = {
  animes: [],
  anime: [],
  animeDetails: [],
  animeEpisodes:[]
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
    case GET_ANIME_BY_ID:
      return {
        ...state,
        animeDetails: action.payload
      }
    case GET_ANIME_EPISODES: 
      return {
        ...state,
        animeEpisodes: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;
