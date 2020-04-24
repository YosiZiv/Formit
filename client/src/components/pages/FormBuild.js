import React from "react";
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
import FormField from "../layouts/FormField";
const FormBuild = ({
  form,
  formBuildInputChange,
  formNameInputChange,
  formBuildInputValidation,
  formCheckValidation,
  formSubmit,
  createFormField,
}) => {
  const inputChange = (event) => {
    const { value, id } = event.currentTarget;
    const { id: field } = event.currentTarget.parentNode.parentNode;
    console.log("test", id, value, field);
    formBuildInputChange({ field, id, value });
  };
  const nameChange = (event) => {
    const { value } = event.currentTarget;
    console.log("test", value);
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
    console.log("form submit work ", form);
    const { formName, fields } = form;
    const newArray = removeErrorFromFields(fields);
    const payload = {
      formName,
      fields: newArray,
    };
    formSubmit({ ...payload });
  };
  const removeErrorFromFields = (fields) => {
    return fields.map((field) => {
      const { label, name, type } = field;
      console.log(field, label, name, type);
      return { label: label.value, name: name.value, type };
    });
  };
  const formFields = form.fields?.length
    ? form.fields.map((field) => {
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
    : [];
  console.log(form);

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
        <div className='form-build-field'>{formFields}</div>
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
const mapStateToProps = ({ formBuild: { form } }) => {
  return { form };
};

export default connect(mapStateToProps, {
  formBuildInputChange,
  formNameInputChange,
  formBuildInputValidation,
  formCheckValidation,
  formSubmit,
  createFormField,
})(FormBuild);
