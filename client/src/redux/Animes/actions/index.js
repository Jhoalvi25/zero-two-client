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
