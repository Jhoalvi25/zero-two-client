
import { FILTER_AND_SORT_ANIMES, GET_ANIME_BY_ID, GET_ANIME_EPISODES, GET_ANIME_GENRES, SEARCH_ANIMES, GET_ANIME_NEWEST, GET_ANIME_OLDEST, GET_ANIMES, GET_ANIME_TRENDING, GET_ANIME_EPISODE, GET_EPISODE_COMMENTS, GET_ALL_LISTS_USER, GET_LIST, CLEAR_ALL_LISTS, CLEAR_LIST_DETAIL, GET_USER_INFO, ADD_EPISODE_COMMENT, DELETE_EPISODE_POST } from "../types";
import {AnyAction} from 'redux'
import { Anime, CommentInterface, Episode, ErrorResponse, Genre, ListDetail, UserInterface, UserLists } from "../../types/types";

// Use the interfaces for each individual state importing its interfaces

interface StateAnimes {
  animes: {count: number , rows: Array<Anime>},
  anime: Anime,
  animeNewest: {count: number , rows: Array<Anime>},
  animesTrending: {count: number , rows: Array<Anime>},
  isActive: Boolean,
  animeDetails: Anime,
  animeEpisodes: Array<Episode>,
  animeEpisode: Episode,
  user: UserInterface
  genres: Array<Genre>
  error: ErrorResponse
  episodeComments: Array<CommentInterface>
  userLists: Array<UserLists>,
  listDetail: ListDetail
}
const initialState = {
  animes: {count: 0, rows: []},
  anime: {} as Anime,
  animeNewest: {count: 0, rows: []},
  animeOldest: [],
  animesTrending: {count: 0, rows: []},
  isActive: false,
  animeDetails: {} as Anime,
  animeEpisodes:[],
  animeEpisode: {} as Episode,
  user: {} as UserInterface,
  genres: [],
  error: {} as ErrorResponse,
  episodeComments: [],
  userLists: [],
  listDetail: {} as ListDetail
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
    case GET_EPISODE_COMMENTS:
      return {
        ...state, 
        episodeComments: action.payload
      }
    case GET_ALL_LISTS_USER:
      return {
        ...state,
        userLists: action.payload
      }
    case GET_LIST:
      return {
        ...state,
        listDetail: action.payload
      }
    case CLEAR_ALL_LISTS:
      return {
        ...state,
        userLists: []
      }
    case CLEAR_LIST_DETAIL: 
      return {
        ...state,
        listDetail: {}
      }
    // case GET_USER_BY_EMAIL:
    //   return {
    //     ...state,
    //     user: action.payload,
    //   }
    case GET_USER_INFO:
      return {
        ...state,
        user: action.payload,
      }
    case ADD_EPISODE_COMMENT: 
      return {
        ...state, 
        episodeComments: [...state.episodeComments	, action.payload]
      }
      case DELETE_EPISODE_POST:
        // let indexEl = state.episodeComments.indexOf(action.payload);
        return {
          ...state,
          episodeComments: state.episodeComments.filter(comment => comment !== action.payload)
        }
    default:
      return state;
  }
    
}

export default rootReducer;
