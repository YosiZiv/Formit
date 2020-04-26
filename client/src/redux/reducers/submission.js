import {
  SUBMISSION_INPUT_CHANGE,
  SUBMISSION_INPUT_VALIDATION,
  SET_SUBMISSION,
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
      const { id, name, value } = action.payload;
      console.log(id, name);

      const newFields = [...state.submission.fields];
      newFields[id] = { name, value: { value } };
      console.log("IMPORTENT", newFields);

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
        submission: action.payload.data,
      };
    }
    default:
      return state;
  }
}
