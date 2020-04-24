import { applyMiddleware, createStore, compose } from "redux";
import { reducers } from "./reducers";
import { api } from "./middlewares/api";
import { loginMdl } from "./middlewares/login";
import { formMdl } from "./middlewares/formBuild";
import { registerMdl } from "./middlewares/register";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(api, ...loginMdl, ...formMdl, ...registerMdl)
  )
);
