
import { FILTER_AND_SORT_ANIMES, GET_ALL_ANIMES, GET_ANIME_BY_ID, GET_ANIME_EPISODES, GET_ANIME_GENRES, SEARCH_ANIMES, GET_ANIME_NEWEST, GET_ANIME_OLDEST, GET_ANIMES, GET_ANIME_TRENDING, GET_USER_BY_EMAIL, GET_ANIME_EPISODE } from "../types";
import {AnyAction} from 'redux'
import { Anime, Episode, ErrorResponse, Genre, User } from "../../types/types";

// Use the interfaces for each individual state importing its interfaces

interface StateAnimes {
  animes: Array<Anime>,
  allAnimes: Array<Anime>,
  anime: Anime,
  animeNewest: Array<Anime>,
  animeOldest: Array<Anime>,
  animesTrending: Array<Anime>,
  isActive: Boolean,
  animeDetails: Anime,
  animeEpisodes: Array<Episode>,
  animeEpisode: Episode,
  user: User
  genres: Array<Genre>
  error: ErrorResponse
}
const initialState = {
  animes: [],
  allAnimes: [],
  anime: {} as Anime,
  animeNewest: [],
  animeOldest: [],
  animesTrending: [],
  isActive: false,
  animeDetails: {} as Anime,
  animeEpisodes:[],
  animeEpisode: {} as Episode,
  user: {} as User,
  genres: [],
  error: {} as ErrorResponse
};

function rootReducer(state:StateAnimes = initialState, action:AnyAction) {
  switch (action.type) {
    case GET_ANIMES: {
      return {
        ...state,
        animes: action.payload,
        error: action.error
      }
    }
    case GET_ALL_ANIMES: {
      return {
        ...state,
        allAnimes: action.payload,
        isActive: false,
        error: action.error
      };
    }
    case SEARCH_ANIMES:
      return {
        ...state,
        animes: action.payload,
        isActive: true,
        error: action.error
      };
    case GET_ANIME_BY_ID:
      return {
        ...state,
        animeDetails: action.payload,
        error: action.error
      };
    case GET_ANIME_EPISODES:
      return {
        ...state,
        animeEpisodes: action.payload,
        error: action.error
      }
      case GET_ANIME_EPISODE:
      return {
        ...state,
        animeEpisode: action.payload,
        error: action.error
      }
    case FILTER_AND_SORT_ANIMES: 
      return {
        ...state,
        animes: action.payload,
        error: action.error
      }
    case GET_ANIME_GENRES:
      return {
        ...state,
        genres: action.payload,
        error: action.error
      }

    case GET_ANIME_NEWEST:
      return {
        ...state,
        animeNewest: action.payload,
        error: action.error
      }
    case GET_ANIME_OLDEST:
      return {
        ...state,
        animeOldest: action.payload,
        error: action.error
      }
    case GET_ANIME_TRENDING: 
      return {
        ...state,
        animesTrending: action.payload,
        error: action.error
      }
    case GET_USER_BY_EMAIL:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
}

export default rootReducer;
