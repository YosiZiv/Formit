import {
  LOGIN_INPUT_CHANGE,
  LOGIN_INPUT_VALIDATION,
  CLEAR_LOGIN_STATE,
} from "../actions/login";
import { checkValidation } from "../../utility";
const initState = {
  loginForm: {
    email: { value: "", error: false },
    password: { value: "", error: false },
  },
};

export default function login(state = initState, action) {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      const { id, value } = action.payload;
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [id]: {
            value,
          },
        },
      };
    case LOGIN_INPUT_VALIDATION: {
      const { id, value, validation } = action.payload;
      const error = checkValidation(id, value, validation);
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [id]: {
            value,
            error,
          },
        },
      };
    }
    case CLEAR_LOGIN_STATE: {
      return {
        loginForm: {
          email: { value: "", error: false },
          password: { value: "", error: false },
        },
      };
    }
    default:
      return state;
  }
}
