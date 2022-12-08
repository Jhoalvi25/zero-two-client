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
