import {
  FORM_BUILD_INPUT_CHANGE,
  FORM_NAME_INPUT_CHANGE,
  FORM_BUILD_INPUT_VALIDATION,
  CHECK_FORM_VALIDATION,
  CREATE_FORM_FIELD,
  REMOVE_FORM_FIELD,
  SET_FORMS,
} from "../actions/form";
import { checkValidation } from "../../utility";
const initState = {
  formBuild: {
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
  forms: [],
};

export default function form(state = initState, action) {
  switch (action.type) {
    case CREATE_FORM_FIELD: {
      const newFields = [...state.formBuild.fields];
      newFields.push({
        id: newFields.length,
        label: { value: "", error: null },
        name: { value: "", error: null },
        type: "text",
      });
      return {
        ...state,
        formBuild: {
          ...state.formBuild,
          fields: [...newFields],
          valid: false,
        },
      };
    }
    case FORM_BUILD_INPUT_CHANGE: {
      const { field, id, value } = action.payload;
      console.log(field, id, value);

      const newFields = [...state.formBuild.fields];
      newFields[field] = { ...newFields[field], [id]: { value } };
      return {
        ...state,
        formBuild: {
          ...state.formBuild,
          fields: [...newFields],
        },
      };
    }
    case FORM_NAME_INPUT_CHANGE: {
      const { value } = action.payload;
      return {
        ...state,
        formBuild: {
          ...state.formBuild,
          formName: value,
        },
      };
    }
    case FORM_BUILD_INPUT_VALIDATION: {
      const { field, id, value, validation } = action.payload;
      const error = checkValidation(id, value, validation);
      const newFields = [...state.formBuild.fields];
      newFields[field] = { ...newFields[field], [id]: { value, error } };
      return {
        ...state,
        formBuild: {
          ...state.formBuild,
          fields: [...newFields],
        },
      };
    }
    case REMOVE_FORM_FIELD: {
    }
    case CHECK_FORM_VALIDATION: {
      let valid = true;
      state.formBuild.fields.forEach((field) => {
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
        formBuild: {
          ...state.formBuild,
          valid,
        },
      };
    }
    case SET_FORMS: {
      console.log("REDUCER SET FORM ", action.payload);

      return {
        ...state,
        forms: action.payload,
      };
    }
    default:
      return state;
  }
}
