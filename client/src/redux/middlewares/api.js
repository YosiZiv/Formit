import { API_REQUEST } from "../actions/api";
import { axios } from "../../axios";
// this middleware care only for API calls
export const api = ({ dispatch }) => (next) => (action) => {
  console.log("redux request 1");

  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;
    if (method === "GET") {
      axios
        .get(url)
        .then((response) => {
          dispatch({ type: onSuccess, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: onError, payload: error.response.data.errors });
        });
    }
    if (method === "POST") {
      axios
        .post(url, action.payload)
        .then((response) => {
          dispatch({ type: onSuccess, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: onError, payload: error.response.data.errors });
        });
    }
  }
  return next(action);
};
