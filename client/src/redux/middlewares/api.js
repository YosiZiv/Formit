import { API_REQUEST } from "../actions/api";
import { axios } from "../../axios";
import { loadingStart, loadingFinish } from "../actions/ui";
// this middleware care only for API calls
export const api = ({ dispatch }) => (next) => (action) => {
  console.log("redux request 1");

  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;
    dispatch(loadingStart());
    if (method === "GET") {
      axios
        .get(url)
        .then((response) => {
          dispatch(loadingFinish());
          dispatch({ type: onSuccess, payload: response.data });
        })
        .catch((error) => {
          dispatch(loadingFinish());
          dispatch({
            type: onError,
            payload: error.response?.data?.error ?? "Someting Went Wrong :/",
          });
        });
    }
    if (method === "POST") {
      axios
        .post(url, action.payload)
        .then((response) => {
          dispatch(loadingFinish());
          dispatch({ type: onSuccess, payload: response.data });
        })
        .catch((error) => {
          dispatch(loadingFinish());
          dispatch({
            type: onError,
            payload: error.response?.data?.errors ?? "Someting Went Wrong :/",
          });
        });
    }
  }
  return next(action);
};
