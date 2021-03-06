export const CREATE_FORM_FIELD = "[formBuild]Create Field";
export const REMOVE_FORM_FIELD = "[formBuild] Remove Field";
export const FORM_BUILD_INPUT_CHANGE = "[formBuild] Set Input";
export const CHECK_FORM_BUILD_VALIDATION =
  "[formBuild] Check form build  Validation";
export const FORM_NAME_INPUT_CHANGE = "[formBuild] Form Name Input Change";
export const FORM_SUBMIT = "[formBuild] Form Submit";
export const FORM_SUBMIT_SUCCESS = "[formBuild] Form Submit Success";
export const FORM_SUBMIT_FAIL = "[formBuild] Form Submit Fail";
export const GET_FORM = "[form] Get Form";
export const GET_FORM_SUCCESS = "[form] Get Form Success";
export const GET_FORM_FAIL = "[form] Get Form Fail";
export const GET_FORMS = "[form] Get Forms";
export const GET_FORMS_SUCCESS = "[form] Get Forms Success";
export const GET_FORMS_FAIL = "[form] Get Forms Fail";
export const SET_FORM = "[form] Set Form";
export const SET_FORMS = "[form] Set Forms";
export const CLEAR_FORM_STATE = "[form] Clear Form State";
export const createFormField = () => ({
  type: CREATE_FORM_FIELD,
});

export const removeFormField = () => ({
  type: REMOVE_FORM_FIELD,
});
export const checkFormBuildValidation = (payload) => ({
  type: CHECK_FORM_BUILD_VALIDATION,
  payload,
});

export const formBuildInputChange = (payload) => ({
  type: FORM_BUILD_INPUT_CHANGE,
  payload,
});
export const formNameInputChange = (payload) => ({
  type: FORM_NAME_INPUT_CHANGE,
  payload,
});

export const formSubmit = (payload) => ({
  type: FORM_SUBMIT,
  payload,
});
export const getForm = (payload) => ({
  type: GET_FORM,
  payload,
});
export const getForms = (payload) => ({
  type: GET_FORMS,
  payload,
});
export const setForm = (payload) => ({
  type: SET_FORM,
  payload,
});
export const setForms = (payload) => ({
  type: SET_FORMS,
  payload,
});
export const clearFormState = (payload) => ({
  type: CLEAR_FORM_STATE,
  payload,
});
