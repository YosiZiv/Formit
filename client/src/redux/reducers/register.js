import {
  SET_REGISTER,
  REGISTER_INPUT_CHANGE,
  REGISTER_INPUT_VALIDATION,
  CLEAR_REGISTER_STATE,
} from "../actions/register";
import { checkValidation } from "../../utility";
const initState = {
  registerForm: {
    name: { value: "", error: false },
    email: { value: "", error: false },
    password: { value: "", error: false },
    passwordConfirm: { value: "", error: false },
  },
  registerFinish: false,
};

export default function login(state = initState, action) {
  switch (action.type) {
    case REGISTER_INPUT_CHANGE:
      const { id, value } = action.payload;

      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [id]: {
            value,
          },
        },
      };
    case REGISTER_INPUT_VALIDATION: {
      const { id, value, validation } = action.payload;
      const error = checkValidation(id, value, validation);

      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [id]: {
            value,
            error,
          },
        },
      };
    }
    case CLEAR_REGISTER_STATE: {
      return {
        registerForm: {
          name: { value: "", error: false },
          email: { value: "", error: false },
          password: { value: "", error: false },
          passwordConfirm: { value: "", error: false },
        },
        registerFinish: false,
      };
    }
    case SET_REGISTER: {
      return {
        ...state,
        registerFinish: action.payload,
      };
    }
    default:
      return state;
  }
}
