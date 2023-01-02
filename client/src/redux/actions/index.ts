import * as types from "../types";
import axios from "axios";
import { AppDispatch } from "../store";
import { User } from "@auth0/auth0-react";
import { SERVICES_ANIMES, SERVICES_ANIMES_PAGE_ONE } from "../../services";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3001';

export const getAnimes = (query: string)=> {

  return async (dispatch: AppDispatch) =>
    await axios
      .get(query ? `${API_ENDPOINT}/animes${query}`:`${API_ENDPOINT}/animes?page=1` )
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
    .get(query ? `${API_ENDPOINT}/animes?${query}`:`${API_ENDPOINT}/animes` )
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
        `${API_ENDPOINT	}/animes?name=${name}`
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
      const response = await axios.get(`${API_ENDPOINT}/animes/${id}`);
      dispatch({ type: types.GET_ANIME_BY_ID, payload: response.data });
      
    } catch (err) {
      dispatch({
        type: types.GET_ANIME_BY_ID, 
        payload: {error: { message: `The anime with id ${id} doesn't exist. Try with another one`}}});

      };
    }
  };

  export const getAnimeEpisode = (idAnime: number | string, idEpisode: number | string ) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/episodes/${idAnime}/${idEpisode}`);
        dispatch({ type: types.GET_ANIME_EPISODE, payload: response.data });
        
      } catch (err) {
        dispatch({
          type: types.GET_ANIME_EPISODE, 
          payload: {error: { message: `The anime with id ${idAnime} doesn't exist. Try with another one`}}});
  
        };
      }
    };
export const getAnimeEpisodes = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/episodes/${id}`);
      if(!response.data.length) {
        return dispatch({
          type: types.GET_ANIME_EPISODES,
          payload: {error: { message: `Not available episodes for anime ${id}` }} 
        })
      } else {
        return dispatch({ type: types.GET_ANIME_EPISODES, payload: response.data });
      }
      
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
      const response = await axios.get(`${API_ENDPOINT}/animes?${query}`);
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
      const response = await axios.get(`${API_ENDPOINT}/genres`);
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
      const response = await axios.get(`${API_ENDPOINT}/animes/newest?${query}`);
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
      const response = await axios.get(`${API_ENDPOINT	}/animes/oldest`);
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
      const response = await axios.get(`${API_ENDPOINT}/animes/newest?sort=rating`);
      dispatch({ type: types.GET_ANIME_TRENDING, payload: response.data });

    } catch (err) {
      dispatch({
        type: types.GET_ANIME_TRENDING,
        payload: { error: { message: "Not found" } }
      })
    }
  }
}
export const registerUser = (user: User) => {
  return async (dispatch: AppDispatch) => {
    try {
      
        const config = {
          url: `${API_ENDPOINT}/user/register`,
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          data: user
        };
        const response = await axios(config);
        dispatch({ type: types.GET_USER_BY_EMAIL, payload: response.data });

    } catch (err: any) {
      dispatch({
        type: types.GET_USER_BY_EMAIL,
        payload: err.message 
      })
    }
  }
}
export const getUserResource = (user: User) => {
  return async (dispatch: AppDispatch) => {
    try {
      
        const config = {
          url: `${API_ENDPOINT}/user`,
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          data: user
        };
        const response = await axios(config);
        dispatch({ type: types.GET_USER_BY_EMAIL, payload: response.data });

    } catch (err: any) {
      dispatch({
        type: types.GET_USER_BY_EMAIL,
        payload: err.message 
      })
    }
  }
}

export const getUserResourceWithGoogle = (token: string, email: string) => {
  return async (dispatch: AppDispatch) => {
    try {
        const config = {
          url: `${API_ENDPOINT}/user/google`,
          method: "POST",
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
        payload: { error: { message: err } }
      })
    }
  }
}
