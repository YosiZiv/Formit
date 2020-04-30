export const NEW_SUBMISSION = "[submission]New Submission";
export const NEW_SUBMISSION_SUCCESS = "[submission]New Submission success";
export const NEW_SUBMISSION_FAIL = "[submission]New Submission fail";
export const SET_SUBMISSIONS = "[submission] Set Submissions";
export const SUBMISSION_INPUT_CHANGE = "[submission] Input change";
export const SUBMISSION_INPUT_VALIDATION =
  "[submission] Input validation Submission";
export const GET_SUBMISSIONS = "[submissions] Get User Submissions";
export const GET_SUBMISSIONS_SUCCESS =
  "[submissions] Get User Submissions Success";
export const GET_SUBMISSIONS_FAIL = "[submissions] Get User Submissions Fail";
export const CLEAR_SUBMISSIONS_STATE = "[submissions] Clear submission state";
export const CHECK_SUBMISSION_FORM_VALIDATION =
  "[submissions] check submission form validation";
export const submissionInputChange = (payload) => ({
  type: SUBMISSION_INPUT_CHANGE,
  payload,
});
export const submissionInputValidation = (payload) => ({
  type: SUBMISSION_INPUT_VALIDATION,
  payload,
});
export const newSubmission = (payload) => ({
  type: NEW_SUBMISSION,
  payload,
});
export const getSubmissions = (payload) => ({
  type: GET_SUBMISSIONS,
  payload,
});
export const setSubmissions = (payload) => ({
  type: SET_SUBMISSIONS,
  payload,
});
export const clearSubmissionState = (payload) => ({
  type: CLEAR_SUBMISSIONS_STATE,
  payload,
});
export const checkSubmissionFormValidation = (payload) => ({
  type: CHECK_SUBMISSION_FORM_VALIDATION,
  payload,
});
