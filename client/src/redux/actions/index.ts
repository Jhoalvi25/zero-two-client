import * as types from "../types";
import axios from "axios";
import { AppDispatch } from "../store";
import { User } from "@auth0/auth0-react";
import { CommentInterface } from "../../types/types";

const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT || "http://localhost:3001";

export const getAnimes = (query: string) => {
  return async (dispatch: AppDispatch) =>
    await axios
      .get(
        query
          ? `${API_ENDPOINT}/animes${query}`
          : `${API_ENDPOINT}/animes?page=1`
      )
      .then((response) => {
        dispatch({
          type: types.GET_ANIMES,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.GET_ANIMES,
          payload: { error: { message: "Not found" } },
        });
      });
};

export function searchAnimeName(name: string) {
  return async function (dispatch: AppDispatch) {
    try {
      var response = await axios.get(`${API_ENDPOINT}/animes?name=${name}`);
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
        payload: {
          error: {
            message: `The anime with id ${id} doesn't exist. Try with another one`,
          },
        },
      });
    }
  };
};

export const getAnimeEpisode = (
  idAnime: number | string,
  idEpisode: number | string
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/episodes/${idAnime}/${idEpisode}`
      );
      dispatch({ type: types.GET_ANIME_EPISODE, payload: response.data });
    } catch (err) {
      dispatch({
        type: types.GET_ANIME_EPISODE,
        payload: {
          error: {
            message: `The anime with id ${idAnime} doesn't exist. Try with another one`,
          },
        },
      });
    }
  };
};

export const getAnimeEpisodes = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/episodes/${id}`);
      if (!response.data.length) {
        return dispatch({
          type: types.GET_ANIME_EPISODES,
          payload: {
            error: { message: `Not available episodes for anime ${id}` },
          },
        });
      } else {
        return dispatch({
          type: types.GET_ANIME_EPISODES,
          payload: response.data,
        });
      }
    } catch (err) {
      return dispatch({
        type: types.GET_ANIME_EPISODES,
        payload: {
          error: { message: `Not available episodes for anime ${id}` },
        },
      });
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
        payload: { error: { message: `Not results for your search.` } },
      });
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
        payload: { error: { message: `Not genres found` } },
      });
    }
  };
};

export const getAnimeNewest = (query: string) => {
  query = query.toString();
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        query
          ? `${API_ENDPOINT}/animes/newest${query}`
          : `${API_ENDPOINT}/animes/newest?page=1`
      );
      dispatch({ type: types.GET_ANIME_NEWEST, payload: response.data });
    } catch (err) {
      dispatch({
        type: types.GET_ANIME_NEWEST,
        payload: { error: { message: "Not animes to show here" } },
      });
    }
  };
};

export const getAnimeOldest = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/animes/oldest`);
      dispatch({ type: types.GET_ANIME_OLDEST, payload: response.data });
    } catch (err) {
      dispatch({
        type: types.GET_ANIME_OLDEST,
        payload: { error: { message: "Not found animes to show here" } },
      });
    }
  };
};

export const getAnimeTrending = (query: string) => {
  query = query.toString();
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        query
          ? `${API_ENDPOINT}/animes/trending${query}`
          : `${API_ENDPOINT}/animes/trending?page=1`
      );
      dispatch({ type: types.GET_ANIME_TRENDING, payload: response.data });
    } catch (err) {
      dispatch({
        type: types.GET_ANIME_TRENDING,
        payload: { error: { message: "Not found" } },
      });
    }
  };
};

export const registerUser = (user: User) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const config = {
        url: `${API_ENDPOINT}/user/register`,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: user,
      };
      await axios(config);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const loginUser = (user: User) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/user/login`,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: user,
      };
      const response = await axios(config);

      window.localStorage.setItem("token", response.data.token);
// ACA MANEJAMOS EL TOKEN
      return response.data.token;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const getUserResource = (accessToken: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/user`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios(config);

      
      dispatch({ type: types.GET_USER_INFO, payload: response.data });
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  };
};

export const getUserResourceWithGoogle = (token: string, email: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/user/google`,
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      window.localStorage.setItem("token", token);
      dispatch({ type: types.GET_USER_INFO, payload: response.data });
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  };
};

export const getEpisodeComments = (episodeId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/reviews/episode/${episodeId}`
      );
      dispatch({ type: types.GET_EPISODE_COMMENTS, payload: response.data });
    } catch (err) {
      dispatch({
        type: types.GET_EPISODE_COMMENTS,
        payload: { error: { message: "Not found animes to show here" } },
      });
    }
  };
};

export const createPaymentGenin = () => {
  return async function (dispatch: AppDispatch) {
    try {
      const response = await axios.post(`${API_ENDPOINT}/create-paymentGenin`);
      dispatch({ type: types.CREATE_PAYMENT_GENIN, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const executePaymentGenin = (userId: string, tokenPlan: string) => {
  return async function (dispatch: AppDispatch) {
    try {
      const config = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        url: `${API_ENDPOINT}/execute-paymentGenin?token=${tokenPlan}`,
        data: { id: userId, token: tokenPlan },
      };

      const response = await axios(config);

      dispatch({ type: types.EXECUTE_PAYMENT_GENIN, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllListsUser = (userId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/list/all?userId=${userId}`
      );
      dispatch({ type: types.GET_ALL_LISTS_USER, payload: response.data });
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const getListFavorite = (userId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/list/favorites/${userId}`);
      dispatch({type: types.GET_LIST_FAVORITES, payload: response.data});
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export const getList =  (id: number | string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/list/${id}`);
      dispatch({ type: types.GET_LIST, payload: response.data });
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const clearDetailList = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: types.CLEAR_LIST_DETAIL });
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const postComment = (comment: CommentInterface, idEpisode: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/reviews/episode/${idEpisode}/addComment`,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: comment,
      };
      const response = await axios(config);
      return response.data;

      // dispatch({type: types.ADD_EPISODE_COMMENT, payload: response.data})
    } catch (err: any) {
      throw new Error(err);
    }
  };
};

export const createPaymentChuunin = () => {
  return async function (dispatch: AppDispatch) {
    try {
      const response = await axios.post(
        `${API_ENDPOINT}/create-paymentChuunin`
      );
      dispatch({ type: types.CREATE_PAYMENT_CHUUNIN, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const executePaymentChuunin = (userId: string, tokenPlan: string) => {
  return async function (dispatch: AppDispatch) {
    try {
      const config = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        url: `${API_ENDPOINT}/execute-paymentChuunin?token=${tokenPlan}`,
        data: { id: userId, token: tokenPlan },
      };

      const response = await axios(config);

      dispatch({ type: types.EXECUTE_PAYMENT_CHUUNIN, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createList = (newList: object) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/list`,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: newList,
      };
      const response = await axios(config);
      return response.data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const addListAnime = (addAnime: object) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/list/add`,
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        data: addAnime,
      };
      const response = await axios(config).then(
        function (value) {
          // Success!
          return value.data;
        },
        function (err) {
          // Error!
          throw new Error(err.response.data);
        }
      );
      return response;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const editListName = (editNameList: object) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/list/edit`,
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        data: editNameList,
      };
      const response = await axios(config);
      return response.data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const postReply = (
  reply: CommentInterface,
  episodeId: number,
  commentId: number
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/reviews/episode/${episodeId}/replyTo/${commentId}`,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: reply,
      }; //index of comment and add to its replies
      const response = await axios(config);
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  };
};

export const createPaymentJounin = () => {
  return async function (dispatch: AppDispatch) {
    try {
      const response = await axios.post(`${API_ENDPOINT}/create-paymentJounin`);
      dispatch({ type: types.CREATE_PAYMENT_JOUNIN, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const executePaymentJounin = (userId: string, tokenPlan: string) => {
  return async function (dispatch: AppDispatch) {
    try {
      const config = {
        url: `${API_ENDPOINT}/execute-paymentJounin?token=${tokenPlan}`,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: { id: userId, token: tokenPlan },
      };

      const response = await axios(config);

      dispatch({ type: types.EXECUTE_PAYMENT_JOUNIN, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAnimeInList = (deleteAnimeInfo: object) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/list/anime`,
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        data: deleteAnimeInfo,
      };
      const response = await axios(config);
      return response.data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const deleteList = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.delete(`${API_ENDPOINT}/list/${id}`);
      return response.data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const deleteComment = (idEpisode: number, commentId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/reviews/episode/${idEpisode}/deleteComment/${commentId}`,
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      };
      const response = await axios(config);
      return response.data;
      // dispatch({type: types.DELETE_EPISODE_POST, payload: response.data})
    } catch (err: any) {
      throw new Error(err);
    }
  };
};

export const clearAllLists = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: types.CLEAR_ALL_LISTS });
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
};

export const editComment = (
  idEpisode: number,
  commentId: number,
  post: CommentInterface
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/reviews/episode/${idEpisode}/editComment/${commentId}`,
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        data: post,
      };
      const response = await axios(config);
      return response.data;
      // dispatch({type: types.DELETE_EPISODE_POST, payload: response.data})
    } catch (err: any) {
      throw new Error(err);
    }
  };
};

export const changeLikeStatus = (userId: string, commentId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/like/change/${userId}/${commentId}`,
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
      };
      const response = await axios(config);
      return response.data;
      // dispatch({type: types.DELETE_EPISODE_POST, payload: response.data})
    } catch (err: any) {
      throw new Error(err);
    }
  };
};

export const adminActions = (options: {
  admin: string;
  user: string;
  action: string;
}) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/admin`,
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        data: options,
      };
      const response = await axios(config);
      return response.data;
      // dispatch({type: types.DELETE_EPISODE_POST, payload: response.data})
    } catch (err: any) {
      throw new Error(err);
    }
  };
};

export const searchUsers = (name: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/user/search?name=${name}`
      );
      dispatch({ type: types.GET_USERS_BY_SEARCH, payload: response.data });
      return response;
    } catch (err) {
      dispatch({
        type: types.GET_USERS_BY_SEARCH,
        payload: { error: { message: "Users not founded" } },
      });
    }
  }
}

export const changeUserSettings = (id: string, settings: {}) => {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        url: `${API_ENDPOINT}/user/configure/${id}`,
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        data: settings
      };
      const response = await axios(config);
      // response.data
      return dispatch({ type: types.GET_USER_INFO, payload: response.data });

    } catch (err: any) {
      throw new Error(err);
    }
  }
}
