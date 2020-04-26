import { apiRequest } from "../actions/api";
import {
  setSubmissions,
  NEW_SUBMISSION,
  NEW_SUBMISSION_SUCCESS,
  NEW_SUBMISSION_FAIL,
  GET_SUBMISSIONS,
  GET_SUBMISSIONS_SUCCESS,
  GET_SUBMISSIONS_FAIL,
} from "../actions/submission";
import { setMessage, redirect } from "../actions/ui";
import { setSubmission } from "../actions/submission";
const newSubmission = ({ dispatch }) => (next) => (action) => {
  if (action.type === NEW_SUBMISSION) {
    const URL = "/submission";
    return dispatch(
      apiRequest(
        "POST",
        URL,
        action.payload,
        NEW_SUBMISSION_SUCCESS,
        NEW_SUBMISSION_FAIL
      )
    );
  }
  next(action);
};

const newSubmissionSuccess = ({ dispatch }) => (next) => (action) => {
  if (action.type === NEW_SUBMISSION_SUCCESS) {
  }
  next(action);
};
const newSubmissionFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === NEW_SUBMISSION_FAIL) {
  }
  next(action);
};
const getSubmissions = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_SUBMISSIONS) {
    const URL = `/submission/${action.payload}`;
    return dispatch(
      apiRequest(
        "GET",
        URL,
        action.payload,
        GET_SUBMISSIONS_SUCCESS,
        GET_SUBMISSIONS_FAIL
      )
    );
  }
  next(action);
};

const getSubmissionsSuccess = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_SUBMISSIONS_SUCCESS) {
    console.log(action.payload);

    dispatch(setSubmissions(action.payload.data));
  }
  next(action);
};
const getSubmissionsFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_SUBMISSIONS_FAIL) {
  }
  next(action);
};
export const submissionMdl = [
  newSubmission,
  newSubmissionSuccess,
  newSubmissionFail,
  getSubmissions,
  getSubmissionsSuccess,
  getSubmissionsFail,
];
