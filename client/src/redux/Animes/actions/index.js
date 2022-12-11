import * as types from "../types";
import axios from "axios";

export const getAnimes = () => {
  return (dispatch) =>
    axios
      .get("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0")
      .then((response) => {
        dispatch({
          type: types.GET_ANIMES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
};

export function searchAnimeName(name) {
  return async function (dispatch) {
    try {
      var response = await axios.get(
        `https://kitsu.io/api/edge/anime?filter[text]=${name}`
      );
      return dispatch({ type: types.SEARCH_ANIMES, payload: response.data });
    } catch {
      return alert("Anime not found");
    }
  };
}

export const getAnimeById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/animes/${id}`);
      dispatch({type: types.GET_ANIME_BY_ID, payload: response.data});
    } catch (err) {
      return({error: {message: `The anime with id ${id} doesn't exist. Try with another one`}});
    }
  }
}

export const getAnimeEpisodes = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/episodes/${id}`);
      dispatch({type: types.GET_ANIME_EPISODES, payload: response.data});
    } catch (err) {
      return({error: {message: `Not available episodes for anime ${id}`}});
    }
  }
}
