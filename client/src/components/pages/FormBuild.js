import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./formBuild.css";
import {
  createFormField,
  formBuildInputChange,
  formNameInputChange,
  formBuildInputValidation,
  formSubmit,
  formCheckValidation,
} from "../../redux/actions/form";
import { clearUi } from "../../redux/actions/ui";
import FormField from "../layouts/FormField";
import { removeErrorFromObjects } from "../../utility";
const FormBuild = ({
  history,
  formBuild,
  formBuildInputChange,
  formNameInputChange,
  formBuildInputValidation,
  formCheckValidation,
  formSubmit,
  createFormField,
  redirect,
  isAuth,
  clearUi,
}) => {
  useEffect(
    () => () => {
      clearUi();
    },
    []
  );

  const inputChange = (event) => {
    const { value, id } = event.currentTarget;
    const { id: field } = event.currentTarget.parentNode.parentNode;
    formBuildInputChange({ field, id, value });
  };
  const nameChange = (event) => {
    const { value } = event.currentTarget;
    formNameInputChange({ value });
  };
  const inputFocus = (event, validation) => {
    const { value, id } = event.currentTarget;
    const { id: field } = event.currentTarget.parentNode.parentNode;
    formBuildInputValidation({ field, id, value, validation });
    formCheckValidation();
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
    ? formBuild.fields.map((field) => {
        const { id, label, name, type } = field;
        return (
          <FormField
            key={id}
            id={id}
            label={label}
            name={name}
            type={type}
            onBlur={(e) =>
              inputFocus(e, {
                isRequired: true,
                minLength: 2,
                maxLength: 15,
              })
            }
            onChange={inputChange}
          />
        );
      })
    : null;
  return (
    <div className='form-build-container'>
      {!localStorage.getItem("token") ||
        (redirect && <Redirect to={redirect} />)}
      <div className='form-build-header text-center m-3'>
        <h1>Build New Form</h1>
      </div>
      <div className='form-build-main'>
        <div className='form-build-new m-3'>
          {formBuild.fields.length < 10 ? (
            <button onClick={createFormField} className='btn btn-success'>
              New Input
            </button>
          ) : (
            <small className='text-danger'>Max </small>
          )}
        </div>
        <div className='form-build-field'>{form}</div>
      </div>
      {formBuild.valid ? (
        <div className='form-build-submit d-flex'>
          <div>
            <label>Enter Form Name</label>
            <input
              className='form-control'
              id='formName'
              onChange={nameChange}
              value={formBuild.formName}
            />
          </div>
          <button onClick={formSubmitHandler} className='btn btn-success'>
            Create
          </button>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = ({ form: { formBuild }, ui: { redirect, isAuth } }) => {
  return { formBuild, redirect, isAuth };
};

export default connect(mapStateToProps, {
  formBuildInputChange,
  formNameInputChange,
  formBuildInputValidation,
  formCheckValidation,
  formSubmit,
  createFormField,
  clearUi,
})(FormBuild);
