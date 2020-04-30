import {
  FORM_BUILD_INPUT_CHANGE,
  FORM_NAME_INPUT_CHANGE,
  CHECK_FORM_BUILD_VALIDATION,
  CREATE_FORM_FIELD,
  SET_FORMS,
  SET_FORM,
  CLEAR_FORM_STATE,
} from "../actions/form";
import { checkFormBuildValidation } from "../../utility";

const initState = {
  formBuild: {
    fields: [
      {
        id: 0,
        label: { value: "", error: null, touched: false },
        name: { value: "", error: null, touched: false },
        type: "text",
      },
    ],
    formName: "",
    isValid: false,
  },

  form: {
    fields: [],
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
        label: { value: "", error: null, touched: false },
        name: { value: "", error: null, touched: false },
        type: "text",
      });
      return {
        ...state,
        formBuild: {
          ...state.formBuild,
          fields: [...newFields],
          isValid: false,
        },
      };
    }
    case FORM_BUILD_INPUT_CHANGE: {
      const { field, id, value } = action.payload;
      const newFields = [...state.formBuild.fields];
      newFields[field] = {
        ...newFields[field],
        [id]: { value, touched: true },
      };
      return {
        ...state,
        formBuild: {
          ...state.formBuild,
          fields: [...newFields],
        },
      };
    }
    case CHECK_FORM_BUILD_VALIDATION: {
      const errors = checkFormBuildValidation(
        action.payload.form,
        action.payload.formValidation
      );
      const isValid =
        Object.keys(errors?.name).length || Object.keys(errors?.label).length
          ? false
          : true;
      const newFields = state.formBuild.fields.map((field, index) => {
        return (
          field && {
            ...field,
            name: {
              value: field?.name?.value,
              error: errors.name[index],
              touched: field?.name?.touched,
            },
            label: {
              value: field?.label?.value,
              error: errors.label[index],
              touched: field?.label?.touched,
            },
          }
        );
      });
      return {
        ...state,
        formBuild: {
          ...state.formBuild,
          fields: newFields,
          isValid: isValid,
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
    case SET_FORMS: {
      return {
        ...state,
        forms: action.payload,
      };
    }
    case SET_FORM: {
      return {
        ...state,
        form: action.payload,
      };
    }
    case CLEAR_FORM_STATE: {
      return {
        ...initState,
      };
    }
    default:
      return state;
  }
}
