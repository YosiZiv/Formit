import { apiRequest } from "../actions/api";
import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../actions/register";
import { setMessage } from "../actions/ui";

const userRegister = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_REGISTER) {
    console.log("redux function work", action.payload);

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
    const {
      payload: { message },
    } = action;
    setMessage({ message });
  }
  next(action);
};
const userRegisterFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === USER_REGISTER_FAIL) {
    console.log(action.payload);
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
