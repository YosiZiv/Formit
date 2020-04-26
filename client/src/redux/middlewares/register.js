import { apiRequest } from "../actions/api";
import {
  setRegister,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../actions/register";
import { setMessage, redirect } from "../actions/ui";

const userRegister = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_REGISTER) {
    const URL = "/user";
    return dispatch(
      apiRequest(
        "POST",
        URL,
        action.payload,
        USER_REGISTER_SUCCESS,
        USER_REGISTER_FAIL
      )
    );
  }
  next(action);
};
const userRegisterSuccess = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_REGISTER_SUCCESS) {
    dispatch(setRegister(true));
  }
  next(action);
};
const userRegisterFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_REGISTER_FAIL) {
    dispatch(setMessage(action.payload));
    return true;
  }
  next(action);
};

export const registerMdl = [
  userRegister,
  userRegisterSuccess,
  userRegisterFail,
];
