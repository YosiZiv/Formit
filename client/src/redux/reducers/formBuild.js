import {
  FORM_BUILD_INPUT_CHANGE,
  FORM_NAME_INPUT_CHANGE,
  FORM_BUILD_INPUT_VALIDATION,
  CHECK_FORM_VALIDATION,
  CREATE_FORM_FIELD,
  REMOVE_FORM_FIELD,
} from "../actions/formBuild";
import { checkValidation } from "../../utility";
const initState = {
  form: {
    fields: [
      {
        id: 0,
        label: { value: "", error: null },
        name: { value: "", error: null },
        type: "text",
      },
    ],
    formName: "",
  },
};

export default function formBuild(state = initState, action) {
  switch (action.type) {
    case CREATE_FORM_FIELD: {
      const newFields = [...state.form.fields];
      newFields.push({
        id: newFields.length,
        label: { value: "", error: null },
        name: { value: "", error: null },
        type: "text",
      });
      return {
        ...state,
        form: {
          ...state.form,
          fields: [...newFields],
          valid: false,
        },
      };
    }
    case FORM_BUILD_INPUT_CHANGE: {
      const { field, id, value } = action.payload;
      const newFields = [...state.form.fields];
      newFields[field] = { ...newFields[field], [id]: { value } };
      return {
        ...state,
        form: {
          ...state.form,
          fields: [...newFields],
        },
      };
    }
    case FORM_NAME_INPUT_CHANGE: {
      const { value } = action.payload;
      return {
        ...state,
        form: {
          ...state.form,
          formName: value,
        },
      };
    }
    case FORM_BUILD_INPUT_VALIDATION: {
      const { field, id, value, validation } = action.payload;
      const error = checkValidation(id, value, validation);
      const newFields = [...state.form.fields];
      newFields[field] = { ...newFields[field], [id]: { value, error } };
      return {
        ...state,
        form: {
          ...state.form,
          fields: [...newFields],
        },
      };
    }
    case REMOVE_FORM_FIELD: {
    }
    case CHECK_FORM_VALIDATION: {
      let valid = true;
      state.form.fields.forEach((field) => {
        console.log(field);
        if (
          typeof field.name.error === "string" ||
          typeof field.label.error === "string"
        ) {
          valid = false;
        }
        if (field.name.error === null || field.label.error === null) {
          valid = false;
        }
      });
      return {
        ...state,
        form: {
          ...state.form,
          valid,
        },
      };
    }
    default:
      return state;
  }
}
