export const LOGIN_INPUT_CHANGE = "[login] Set Input";
export const USER_LOGIN = "[login] user login Start";
export const USER_LOGIN_SUCCESS = "[login] user login Success";
export const USER_LOGIN_FAIL = "[login] user login Fail";

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});
