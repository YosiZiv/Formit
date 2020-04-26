import { combineReducers } from "redux";
import login from "./login";
import ui from "./ui";
import form from "./form";
import register from "./register";
import submission from "./submission";
export const reducers = combineReducers({
  form,
  login,
  ui,
  register,
  submission,
});
