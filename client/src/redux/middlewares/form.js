import { apiRequest } from "../actions/api";
import {
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL,
  GET_FORM,
  GET_FORM_SUCCESS,
  GET_FORM_FAIL,
} from "../actions/form";
import { setMessage, redirect } from "../actions/ui";

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
    dispatch(redirect("/"));
  }
  next(action);
};
const formSubmitFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === FORM_SUBMIT_FAIL) {
    const {
      payload: { message },
    } = action;
    dispatch(setMessage(message));
  }
  next(action);
};

const getForm = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FORM) {
    const URL = "/form" + action.payload;
    return dispatch(apiRequest("get", URL, GET_FORM_SUCCESS, GET_FORM_FAIL));
  }
  next(action);
};

const getFormSuccess = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FORM) {
    console.log(action.payload);
  }
  next(action);
};
const getFormFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FORM) {
    console.log(action.payload);
  }
  next(action);
};
export const formMdl = [
  formSubmit,
  formSubmitSuccess,
  formSubmitFail,
  getForm,
  getFormSuccess,
  getFormFail,
];
