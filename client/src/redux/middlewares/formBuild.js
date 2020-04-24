import { apiRequest } from "../actions/api";
import {
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL,
} from "../actions/formBuild";
import { setMessage, deleteMessage } from "../actions/ui";

const formSubmit = ({ dispatch }) => (next) => (action) => {
  if (action.type === FORM_SUBMIT) {
    const URL = "/form";
    return dispatch(
      apiRequest(
        "POST",
        URL,
        action.payload,
        FORM_SUBMIT_SUCCESS,
        FORM_SUBMIT_FAIL
      )
    );
  }
  next(action);
};

const formSubmitSuccess = ({ dispatch }) => (next) => (action) => {
  if (action.type === FORM_SUBMIT_SUCCESS) {
    const {
      payload: { message },
    } = action;
    dispatch(setMessage(message));
  }
  next(action);
};
const formSubmitFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === FORM_SUBMIT_FAIL) {
    const {
      payload: { message },
    } = action;
    dispatch(setMessage(action));
  }
  next(action);
};
export const formMdl = [formSubmit, formSubmitSuccess, formSubmitFail];
