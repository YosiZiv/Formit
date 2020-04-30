import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./formBuild.css";
import Input from "../layouts/Input";
import {
  createFormField,
  formBuildInputChange,
  formNameInputChange,
  checkFormBuildValidation,
  formSubmit,
  clearFormState,
} from "../../redux/actions/form";
import { clearUi } from "../../redux/actions/ui";
import FormField from "../layouts/FormField";
import { removeErrorFromObjects } from "../../utility";
const FormBuild = ({
  formBuild,
  formBuildInputChange,
  formNameInputChange,
  checkFormBuildValidation,
  formSubmit,
  createFormField,
  redirect,
  loading,
  clearUi,
  clearFormState,
}) => {
  const formValidation = {
    isRequired: true,
    minLength: 2,
    maxLength: 15,
  };
  useEffect(
    () => () => {
      clearUi();
      clearFormState();
    },
    [clearUi, clearFormState]
  );

  const inputChange = (event) => {
    const { value, id } = event.currentTarget;
    const { id: field } = event.currentTarget.parentNode.parentNode.parentNode;
    formBuildInputChange({ field, id, value });
  };
  const nameChange = (event) => {
    const { value } = event.currentTarget;
    formNameInputChange({ value });
  };
  const inputFocus = () => {
    const form = formBuild?.fields?.length ? formBuild.fields : [];
    console.log(form);
    checkFormBuildValidation({ form, formValidation });
  };
  const formSubmitHandler = () => {
    const { formName, fields } = formBuild;
    const newArray = removeErrorFromObjects(fields);
    const payload = {
      formName,
      fields: newArray,
    };
    formSubmit(payload);
  };
  const form = formBuild.fields?.length
    ? formBuild.fields.map((field, index) => {
        const { label, name, type } = field;
        console.log(label, name);

        return (
          <FormField
            key={index}
            index={index}
            id={index}
            label={label}
            name={name}
            type={type}
            onBlur={(e) => inputFocus(e, {})}
            onChange={inputChange}
          />
        );
      })
    : null;
  console.log(formBuild.formName.length);

  return (
    <div className='form-build-container'>
      {!localStorage.getItem("token") ||
        (redirect && <Redirect to={redirect} />)}
      <div className='form-build-wrapper'>
        <div className='form-build-header'>
          <h1>Build New Form</h1>
        </div>
        <div className='form-build-main'>
          <div className='form-build-new'>
            {formBuild.fields.length < 10 ? (
              <button onClick={createFormField} className='btn btn-success'>
                New Input
              </button>
            ) : (
              <small className='text-danger'>Max </small>
            )}
          </div>
          <div className='form-build-fields'>{form}</div>
        </div>
        {formBuild.isValid && (
          <div className='form-build-submit'>
            <Input
              id='formBuild'
              name='Form Name'
              onChange={nameChange}
              value={formBuild.name}
              onBlur={inputFocus}
            />
            <div className='form-build-submit'>
              <button
                disabled={loading || !formBuild.formName.length > 0}
                onClick={formSubmitHandler}
                className='btn btn-success'
              >
                Create
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({
  form: { formBuild },
  ui: { redirect, isAuth, loading },
}) => {
  return { formBuild, redirect, isAuth, loading };
};

export default connect(mapStateToProps, {
  formBuildInputChange,
  formNameInputChange,
  checkFormBuildValidation,
  formSubmit,
  createFormField,
  clearUi,
  clearFormState,
})(FormBuild);
