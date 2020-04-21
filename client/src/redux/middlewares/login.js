import { apiRequest } from "../actions/api";
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../actions/login";
const userLogin = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === USER_LOGIN) {
    const URL = "/session";
    console.log("function login user start work ", action.payload);
    dispatch(
      apiRequest(
        "POST",
        URL,
        action.payload,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAIL
      )
    );
  }
};
const userLoginSuccess = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === USER_LOGIN_SUCCESS) {
    console.log(action.payload);

    // dispatch(redirectTo("login"));
  }
};
const userLoginFail = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === USER_LOGIN_FAIL) {
    console.log(action.payload);
  }
};
export const loginMdl = [userLogin, userLoginSuccess, userLoginFail];
