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
      console.log(state.submission.fields, field, id, value);

      const newFields = [...state.submission.fields];
      console.log(newFields);
      newFields[field] = { name: id, value: { value } };
      console.log(newFields);

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
      console.log(field, id, value, validation);

      const error = checkValidation(id, value, validation);
      const newFields = [...state.submission.fields];
      newFields[field] = { name: id, value: { value, error } };
      console.log(newFields);

      return {
        ...state,
        submission: {
          ...state.submission,
          fields: newFields,
        },
      };
    }
    case SET_SUBMISSION: {
      console.log(action.payload);
      return {
        ...state,
        submissions: action.payload,
      };
    }
    default:
      return state;
  }
}
