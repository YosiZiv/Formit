import {
  SET_SUBMISSION,
  SUBMISSION_INPUT_CHANGE,
  SUBMISSION_INPUT_VALIDATION,
} from "../actions/submission";
import { checkValidation } from "../../utility";
const initState = {
  form: {
    fields: [],
    formName: "",
  },
  submission: {
    fields: [],
    formName: "",
  },
  submissions: [],
};

export default function submission(state = initState, action) {
  switch (action.type) {
    case SUBMISSION_INPUT_CHANGE: {
      const { field, id, value } = action.payload;
      const newFields = [...state.submission.fields];
      newFields[field] = { name: id, value: { value } };
      return {
        ...state,
        submission: {
          ...state.submission,
          fields: newFields,
        },
      };
    }
    case SUBMISSION_INPUT_VALIDATION: {
      const { field, id, value, validation } = action.payload;

      const error = checkValidation(id, value, validation);
      const newFields = [...state.submission.fields];
      newFields[field] = { name: id, value: { value, error } };
      return {
        ...state,
        submission: {
          ...state.submission,
          fields: newFields,
        },
      };
    }
    case SET_SUBMISSION: {
      return {
        ...state,
        submissions: action.payload,
      };
    }
    default:
      return state;
  }
}
