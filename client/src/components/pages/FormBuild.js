import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./formBuild.css";
import {
  createFormField,
  formBuildInputChange,
  formNameInputChange,
  formBuildInputValidation,
  formSubmit,
  formCheckValidation,
} from "../../redux/actions/formBuild";
import { clearUi } from "../../redux/actions/ui";
import FormField from "../layouts/FormField";
import { removeErrorFromObjects } from "../../utility";
const FormBuild = ({
  history,
  form,
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
  console.log(redirect);
  !localStorage.getItem("token") && history.push("/");
  redirect && history.push(redirect);
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
    console.log(field, id, value, validation);
    formBuildInputValidation({ field, id, value, validation });
    formCheckValidation();
  };
  const formSubmitHandler = () => {
    const { formName, fields } = form;
    const newArray = removeErrorFromObjects(fields);
    const payload = {
      formName,
      fields: newArray,
    };
    formSubmit({ ...payload });
  };

  const formFields = "";
  return (
    <div className='form-build-container'>
      <div className='form-build-header text-center m-3'>
        <h1>Build New Form</h1>
      </div>
      <div className='form-build-main'>
        <div className='form-build-new m-3'>
          {form.fields.length < 10 ? (
            <button onClick={createFormField} className='btn btn-success'>
              New Input
            </button>
          ) : (
            <small className='text-danger'>Max </small>
          )}
        </div>
        <div className='form-build-field'>
          {form.fields?.length
            ? form.fields.map((field) => {
                console.log("maping?");

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
            : []}
        </div>
      </div>
      {form.valid ? (
        <div className='form-build-submit d-flex'>
          <div>
            <label>Enter Form Name</label>
            <input
              className='form-control'
              id='formName'
              onChange={nameChange}
              value={form.formName}
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
const mapStateToProps = ({ formBuild: { form }, ui: { redirect, isAuth } }) => {
  return { form, redirect, isAuth };
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
