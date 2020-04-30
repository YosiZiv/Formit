import {
  SET_MESSAGE,
  DELETE_MESSAGE,
  REDIRECT,
  CLEAR_UI,
  LOADING_START,
  LOADING_FINISH,
  IS_AUTH,
} from "../actions/ui";
const initState = {
  message: null,
  redirect: null,
  loading: false,
  isAuth: false,
};

export default function ui(state = initState, action) {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirect: action.payload };
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    case DELETE_MESSAGE:
      return { ...state, message: null };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_FINISH:
      return { ...state, loading: false };
    case IS_AUTH:
      return { ...state, isAuth: action.payload };
    case CLEAR_UI:
      return { ...state, loading: false, message: null, redirect: null };
    default:
      return state;
  }
}
