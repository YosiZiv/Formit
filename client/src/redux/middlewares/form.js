import { apiRequest } from "../actions/api";
import {
  setForm,
  setForms,
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL,
  GET_FORM,
  GET_FORM_SUCCESS,
  GET_FORM_FAIL,
  GET_FORMS,
  GET_FORMS_SUCCESS,
  GET_FORMS_FAIL,
} from "../actions/form";
import { setSubmission } from "../actions/submission";
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
    dispatch(redirect("/forms"));
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
    const URL = `/form/${action.payload}`;
    return dispatch(
      apiRequest("GET", URL, null, GET_FORM_SUCCESS, GET_FORM_FAIL)
    );
  }
  next(action);
};

const getFormSuccess = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FORM_SUCCESS) {
    return dispatch(setForm(action.payload.data));
  }
  next(action);
};
const getFormFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FORM_FAIL) {
    dispatch(setMessage(action.payload));
  }
  next(action);
};
const getForms = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FORMS) {
    const URL = `/user/forms`;
    return dispatch(
      apiRequest("GET", URL, null, GET_FORMS_SUCCESS, GET_FORMS_FAIL)
    );
  }
  next(action);
};

const getFormsSuccess = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FORMS_SUCCESS) {
    return dispatch(setForms(action.payload.data));
  }
  next(action);
};
const getFormsFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FORMS_FAIL) {
    return dispatch(setMessage(action.payload));
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
  getForms,
  getFormsSuccess,
  getFormsFail,
];
