import {
  SUBMISSION_INPUT_CHANGE,
  SUBMISSION_INPUT_VALIDATION,
  CHECK_SUBMISSION_FORM_VALIDATION,
  SET_SUBMISSIONS,
  CLEAR_SUBMISSIONS_STATE,
} from "../actions/submission";
import { checkValidation, checkFormValidation } from "../../utility";
const initState = {
  submission: {
    fields: [],
    isValid: false,
  },
  submissions: [],
};

export default function submission(state = initState, action) {
  switch (action.type) {
    case SUBMISSION_INPUT_CHANGE: {
      const { id, name, value } = action.payload;
      const newFields = [...state.submission.fields];
      newFields[id] = { name, value: { value } };
      return {
        ...state,
        submission: {
          ...state.submission,
          fields: newFields,
        },
      };
    }
    case SUBMISSION_INPUT_VALIDATION: {
      const { id, name, value, validation } = action.payload;
      const error = checkValidation(name, value, validation);
      const newFields = [...state.submission.fields];
      newFields[id] = { name, value: { value, error } };
      return {
        ...state,
        submission: {
          ...state.submission,
          fields: newFields,
        },
      };
    }
    case CHECK_SUBMISSION_FORM_VALIDATION: {
      console.log(action.payload.form);

      const errors = checkFormValidation(
        action.payload.form,
        action.payload.formValidation
      );
      const isValid = Object.keys(errors).length ? false : true;
      const newFields = state.submission.fields.map((field) => {
        return (
          field && {
            ...field,
            value: { value: field?.value?.value, error: errors[field?.name] },
          }
        );
      });
      return {
        ...state,
        submission: {
          ...state.submission,
          fields: newFields,
          isValid,
        },
      };
    }
    case SET_SUBMISSIONS: {
      return {
        ...state,
        submissions: action.payload,
      };
    }
    case CLEAR_SUBMISSIONS_STATE: {
      return {
        ...initState,
      };
    }
    default:
      return state;
  }
}
