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
import { setMessage, deleteMessage } from "../actions/ui";

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
    console.log("function user auth work");

    const token = localStorage.getItem("token");
    if (!token) {
      return dispatch(logout());
    } else {
      const date = new Date();
      const expiresIn = new Date(localStorage.getItem("expiresIn"));
      if (expiresIn && expiresIn > date) {
        // dispatch({ type: USER_LOGIN_SUCCESS, payload: { token, expiresIn } });
        return dispatch(checkExpiresIn({ expiresIn }));
      } else {
        return dispatch(logout());
        // dispatch(userLogout());
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
      payload: { expiresIn, token },
    } = action;
    var date = new Date();
    date.setDate(date.getDate() + expiresIn);
    localStorage.setItem("token", token);
    localStorage.setItem("expiresIn", date);
    let test = new Date();
    test.setMinutes(test.getMinutes() + 1);
    console.log(test);
    return dispatch(checkExpiresIn({ expiresIn: test }));
  }
  next(action);
};
const userLoginFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_LOGIN_FAIL) {
    console.log(action.payload);
    dispatch(setMessage(action.payload));
    return true;
  }
  next(action);
};
const userLogout = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_LOGOUT) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    return true;
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
