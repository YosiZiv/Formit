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
import { redirect, setMessage } from "../actions/ui";

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
    return dispatch(redirect("/"));
  }
  next(action);
};
const newSubmissionFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === NEW_SUBMISSION_FAIL) {
    return dispatch(setMessage(action.payloads));
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
    return dispatch(setSubmissions(action.payload.data));
  }
  next(action);
};
const getSubmissionsFail = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_SUBMISSIONS_FAIL) {
    return dispatch(setMessage(action.payload));
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
