import { combineReducers } from "redux";
import login from "./login";
import ui from "./ui";
export const reducers = combineReducers({
  login,
  ui,
});
