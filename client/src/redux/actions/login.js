export const LOGIN_INPUT_CHANGE = "[login] Set Input";
export const LOGIN_INPUT_VALIDATION = "[login] Input Validation";
export const USER_LOGIN = "[login] user login Start";
export const USER_LOGIN_SUCCESS = "[login] user login Success";
export const USER_LOGIN_FAIL = "[login] user login Fail";
export const USER_LOGOUT = "[login] user Logout";
export const AUTH_CHECK = "[login] User Auth Check";
export const CHECK_EXPIRES_IN = "[login] User Check Expires In";
export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});
export const loginInputValidation = (payload) => ({
  type: LOGIN_INPUT_VALIDATION,
  payload,
});

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});
export const logout = () => ({
  type: USER_LOGOUT,
});
export const authCheck = () => ({
  type: AUTH_CHECK,
});
export const checkExpiresIn = (payload) => {
  console.log(payload);

  return {
    type: CHECK_EXPIRES_IN,
    payload,
  };
};

//   ({ dispatch }) => (next) => (action) => {
//   console.log(expiresIn);
//   setTimeout(() => {
//     dispatch(logout());
//   }, expiresIn);
// };
