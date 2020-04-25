export const CREATE_FORM_FIELD = "[formBuild]Create Field";
export const REMOVE_FORM_FIELD = "[formBuild] Remove Field";
export const FORM_BUILD_INPUT_CHANGE = "[formBuild] Set Input";
export const FORM_BUILD_INPUT_VALIDATION = "[formBuild] Input Validation";
export const CHECK_FORM_VALIDATION = "[formBuild] Form Check Validation";
export const FORM_NAME_INPUT_CHANGE = "[formBuild] Form Name Input Change";
export const FORM_SUBMIT = "[formBuild] Form Submit";
export const FORM_SUBMIT_SUCCESS = "[formBuild] Form Submit Success";
export const FORM_SUBMIT_FAIL = "[formBuild] Form Submit Fail";
export const GET_FORM = "[form] Get Form";
export const GET_FORM_SUCCESS = "[form] Get Form Success";
export const GET_FORM_FAIL = "[form] Get Form Fail";
export const createFormField = () => ({
  type: CREATE_FORM_FIELD,
});

export const removeFormField = () => ({
  type: REMOVE_FORM_FIELD,
});

export const formBuildInputChange = (payload) => ({
  type: FORM_BUILD_INPUT_CHANGE,
  payload,
});
export const formNameInputChange = (payload) => ({
  type: FORM_NAME_INPUT_CHANGE,
  payload,
});
export const formBuildInputValidation = (payload) => ({
  type: FORM_BUILD_INPUT_VALIDATION,
  payload,
});
export const formCheckValidation = () => ({
  type: CHECK_FORM_VALIDATION,
});
export const formSubmit = (payload) => ({
  type: FORM_SUBMIT,
  payload,
});
export const getForm = (payload) => ({
  type: FORM_SUBMIT,
  payload,
});
