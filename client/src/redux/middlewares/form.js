import { apiRequest } from "../actions/api";
import {
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
import { setMessage, redirect } from "../actions/ui";
import { setSubmission } from "../actions/submission";
const formSubmit = ({ dispatch }) => (next) => (action) => {
  if (action.type === FORM_SUBMIT) {
    console.log("IMPORRTENT", action.payload);

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
    dispatch(redirect("/formslists"));
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
    dispatch(setSubmission(action.payload.data));
  }
  next(action);
};
const getFormFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FORM_FAIL) {
    console.log(action.payload);
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
    dispatch(setForms(action.payload.data));
  }
  next(action);
};
const getFormsFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FORMS_FAIL) {
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
  getForms,
  getFormsSuccess,
  getFormsFail,
];
