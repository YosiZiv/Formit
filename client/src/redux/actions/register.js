export const REGISTER_INPUT_CHANGE = "[REGISTER] Set Input";
export const REGISTER_INPUT_VALIDATION = "[REGISTER] Input Validation";
export const USER_REGISTER = "[REGISTER] user REGISTER Start";
export const USER_REGISTER_SUCCESS = "[REGISTER] user REGISTER Success";
export const USER_REGISTER_FAIL = "[REGISTER] user REGISTER Fail";
export const CLEAR_REGISTER_STATE = "[REGISTER] Clear Ui";

export const registerInputChange = (payload) => ({
  type: REGISTER_INPUT_CHANGE,
  payload,
});
export const registerInputValidation = (payload) => ({
  type: REGISTER_INPUT_VALIDATION,
  payload,
});

export const userRegister = (payload) => ({
  type: USER_REGISTER,
  payload,
});

export const clearRegisterState = (payload) => ({
  type: CLEAR_REGISTER_STATE,
  payload,
});
