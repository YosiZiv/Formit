import {
  SET_MESSAGE,
  CLEAR_MESSAGES,
  REDIRECT,
  CLEAR_UI,
  LOADING_START,
  LOADING_FINISH,
  IS_AUTH,
} from "../actions/ui";
const initState = {
  messages: {},
  redirect: null,
  loading: false,
  isAuth: false,
};

export default function ui(state = initState, action) {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirect: action.payload };
    case SET_MESSAGE:
      return { ...state, messages: action.payload };
    case CLEAR_MESSAGES:
      return { ...state, messages: {} };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_FINISH:
      return { ...state, loading: false };
    case IS_AUTH:
      return { ...state, isAuth: action.payload };
    case CLEAR_UI:
      return { ...state, loading: false, messages: {}, redirect: null };
    default:
      return state;
  }
}
