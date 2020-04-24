import { combineReducers } from "redux";
import login from "./login";
import ui from "./ui";
import formBuild from "./formBuild";
export const reducers = combineReducers({
  formBuild,
  login,
  ui,
});
