export const SET_MESSAGE = "[UI] Message";
export const DELETE_MESSAGE = "[UI] Delete Message";
export const REDIRECT = "[UI] Redirect";
export const CLEAR_UI = "[UI] Clear UI State";
export const LOADING_START = "[UI] Loading Start";
export const LOADING_FINISH = "[UI] Loading Finish";
export const IS_AUTH = "[UI] Is Auth";
export const setMessage = (payload) => ({
  type: SET_MESSAGE,
  payload,
});
export const deleteMessage = () => {
  return {
    type: DELETE_MESSAGE,
  };
};
export const redirect = (payload) => ({
  type: REDIRECT,
  payload,
});
export const loadingStart = () => ({
  type: LOADING_START,
});
export const loadingFinish = () => ({
  type: LOADING_FINISH,
});
export const isAuth = (payload) => ({
  type: IS_AUTH,
  payload,
});
export const clearUi = () => ({
  type: CLEAR_UI,
});
