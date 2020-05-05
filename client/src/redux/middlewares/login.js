import { apiRequest } from "../actions/api";
import {
  logout,
  checkExpiresIn,
  CHECK_EXPIRES_IN,
  AUTH_CHECK,
  USER_LOGOUT,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../actions/login";
import { setMessage, isAuth, redirect, clearUi } from "../actions/ui";

const checkExpiresInMid = ({ dispatch }) => (next) => (action) => {
  if (action.type === CHECK_EXPIRES_IN) {
    if (action.payload.expiresIn) {
      const date = new Date();
      const setTime = action.payload.expiresIn - date;
      return setTimeout(() => {
        dispatch(logout());
      }, setTime);
    }
  }

  next(action);
};

const userAuthCheck = ({ dispatch }) => (next) => (action) => {
  if (action.type === AUTH_CHECK) {
    const token = localStorage.getItem("token");
    if (!token) {
      return dispatch(isAuth(false));
    } else {
      const date = new Date();
      const expiresIn = new Date(localStorage.getItem("expiresIn"));
      if (expiresIn && expiresIn > date) {
        dispatch(isAuth(true));
        return dispatch(checkExpiresIn({ expiresIn }));
      } else {
        return dispatch(isAuth(false));
      }
    }
  }
  next(action);
};
const userLogin = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_LOGIN) {
    const URL = "/session";
    return dispatch(
      apiRequest(
        "POST",
        URL,
        action.payload,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAIL
      )
    );
  }
  next(action);
};
const userLoginSuccess = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_LOGIN_SUCCESS) {
    const {
      payload: { expiresIn, token, user },
    } = action;
    const date = new Date();
    date.setDate(date.getDate() + expiresIn);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("expiresIn", date);
    dispatch(checkExpiresIn({ expiresIn: date }));
    dispatch(isAuth(true));
    dispatch(redirect("/"));
  }
  next(action);
};
const userLoginFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_LOGIN_FAIL) {
    return dispatch(setMessage(action.payload));
  }
  next(action);
};
const userLogout = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_LOGOUT) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    dispatch(isAuth(false));
    dispatch(redirect("/"));
  }
  next(action);
};

export const loginMdl = [
  userAuthCheck,
  userLogin,
  userLoginSuccess,
  userLoginFail,
  userLogout,
  checkExpiresInMid,
];
