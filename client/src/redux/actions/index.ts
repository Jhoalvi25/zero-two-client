import * as types from "../types";
import axios from "axios";
import { AppDispatch } from "../store";

export const getAnimes = (query: string)=> {

  return async (dispatch: AppDispatch) =>
    await axios
      .get(query ? `http://localhost:3001/animes${query}`:`http://localhost:3001/animes?page=1` )
      .then((response) => {
        dispatch({
          type: types.GET_ANIMES,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.GET_ANIMES,
          payload: {error: {message: 'Not found'}}
        })
        // return { error: { message: "Not found" } };
      });
}
export const getAllAnimes = (query: string ) => {
 
  return async (dispatch: AppDispatch) =>
    await axios
    .get(query ? `http://localhost:3001/animes?${query}`:`http://localhost:3001/animes` )
      .then((response) => {
        dispatch({
          type: types.GET_ALL_ANIMES,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.GET_ALL_ANIMES,
          payload: { error: { message: "Not found" } }
        })
      });
};

export function searchAnimeName(name: string) {
  return async function (dispatch: AppDispatch) {
    try {
      var response = await axios.get(
        `http://localhost:3001/animes?name=${name}`
      );
      return dispatch({ type: types.SEARCH_ANIMES, payload: response.data });
    } catch {
      return { error: { message: "Not found" } };
    }
  };
}

export const getAnimeById = (id: number | string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/animes/${id}`);
      dispatch({ type: types.GET_ANIME_BY_ID, payload: response.data });
      
    } catch (err) {
      dispatch({
        type: types.GET_ANIME_BY_ID, 
        payload: {error: { message: `The anime with id ${id} doesn't exist. Try with another one`}}});

      };
    }
  };


export const getAnimeEpisodes = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/episodes/${id}`);
      return dispatch({ type: types.GET_ANIME_EPISODES, payload: response.data });
    } catch (err) {
      return dispatch({ 
        type: types.GET_ANIME_EPISODES,
        payload: {error: { message: `Not available episodes for anime ${id}` }} 
      })
      
    }
  };
};

export const filterAndSortAnimes = (query: string) => {

  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/animes?${query}`);
      dispatch({ type: types.FILTER_AND_SORT_ANIMES, payload: response.data });

    } catch (err) {
      dispatch({
        type: types.FILTER_AND_SORT_ANIMES,
        payload: { error: { message: `Not results for your search.` } }
      })
    }
  };
};

export const getAnimeGenres = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/genres`);
      dispatch({ type: types.GET_ANIME_GENRES, payload: response.data });

    } catch (err) {
      dispatch({
        type: types.GET_ANIME_GENRES, 
        payload: { error: { message: `Not genres found` } }
      })
    }
  };
};

export const getAnimeNewest = (query: string) => {
  query = query.toString();
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/animes/newest?${query}`);
      dispatch({ type: types.GET_ANIME_NEWEST, payload: response.data });
    } catch (err) {
      dispatch({
        type: types.GET_ANIME_NEWEST, 
        payload: { error: { message: "Not animes to show here" } }
      });
    }
  };
};

export const getAnimeOldest = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/animes/oldest");
      dispatch({ type: types.GET_ANIME_OLDEST, payload: response.data });
    } catch (err) {
      dispatch({
        type: types.GET_ANIME_OLDEST, 
        payload: { error: { message: "Not found animes to show here" } }
      })
    }
  };
};

export const getAnimeTrending = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/animes/newest?sort=rating");
      dispatch({ type: types.GET_ANIME_TRENDING, payload: response.data });

    } catch (err) {
      dispatch({
        type: types.GET_ANIME_TRENDING,
        payload: { error: { message: "Not found" } }
      })
    }
  }
}

export const getUserResource = (token: string, email: string) => {
  return async (dispatch: AppDispatch) => {
    try {
        const config = {
          url: `http://localhost:3001/user/${email}`,
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        };
        const response = await axios(config);
        dispatch({ type: types.GET_USER_BY_EMAIL, payload: response.data });
    } catch (err) {
      dispatch({
        type: types.GET_USER_BY_EMAIL,
        payload: { error: { message: "Not found" } }
      })
    }
  }
}
