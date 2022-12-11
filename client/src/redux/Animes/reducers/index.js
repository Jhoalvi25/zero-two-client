
import { FILTER_AND_SORT_ANIMES, GET_ANIMES, GET_ANIME_BY_ID, GET_ANIME_EPISODES, GET_ANIME_GENRES, SEARCH_ANIMES } from "../types";

const initialState = {
  animes: [],
  anime: [],
  isActive: false,
  animeDetails: [],
  animeEpisodes:[],
  genres: []

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANIMES: {
      return {
        ...state,
        animes: action.payload,
        isActive: false,
      };
    }
    case SEARCH_ANIMES:
      return {
        ...state,
        anime: action.payload,
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
        animeEpisodes: action.payload
      }
    case FILTER_AND_SORT_ANIMES: 
      return {
        ...state,
        animes: action.payload
      }
    case GET_ANIME_GENRES:
      return {
        ...state,
        genres: action.payload
      }

    default:
      return state;
  }
}

export default rootReducer;
