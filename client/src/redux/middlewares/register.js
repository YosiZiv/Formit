import { apiRequest } from "../actions/api";
import {
  setRegister,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../actions/register";
import { setMessage } from "../actions/ui";

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
    return dispatch(setRegister(true));
  }
  next(action);
};
const userRegisterFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_REGISTER_FAIL) {
    return dispatch(setMessage(action.payload));
  }
  next(action);
};

export const registerMdl = [
  userRegister,
  userRegisterSuccess,
  userRegisterFail,
];
