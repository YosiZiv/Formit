import { combineReducers } from "redux";
import login from "./login";
import ui from "./ui";
import formBuild from "./formBuild";
import register from "./register";
export const reducers = combineReducers({
  formBuild,
  login,
  ui,
  register,
});
