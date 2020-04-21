import { LOGIN_INPUT_CHANGE } from "../actions/login";
const initState = {
  loginForm: {},
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
    default:
      return state;
  }
}
