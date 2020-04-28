import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./formSubmission.css";
import { getForm } from "../../redux/actions/form";
import {
  submissionInputChange,
  submissionInputValidation,
  newSubmission,
} from "../../redux/actions/submission";
import SubmissionInput from "../layouts/SubmissionInputs";
import Spinner from "../layouts/Spinner";
import { removeErrorFromObjects } from "../../utility";
const FormSubmission = ({
  getForm,
  form,
  submission,
  match,
  submissionInputChange,
  submissionInputValidation,
  newSubmission,
  loading,
  redirect,
}) => {
  useEffect(() => {
    const formId = match.params.id;
    getForm(formId);
  }, []);
  const inputChange = (event) => {
    const { value, id, name } = event.currentTarget;
    submissionInputChange({ id, name, value });
  };
  const inputFocus = (event, validation) => {
    const { name, value, id } = event.currentTarget;
    submissionInputValidation({ id, name, value, validation });
  };
  const handleFormSubmit = () => {
    const filterFields = {
      formName: form.formName,
      formId: match.params.id,
      fields: removeErrorFromObjects(submission.fields),
    };

    newSubmission(filterFields);
  };
  const submissionForm =
    form.fields?.length && !loading ? (
      form.fields.map((field, index) => {
        const { label, type } = field;
        return (
          <SubmissionInput
            key={index}
            id={index}
            name={field.name}
            type={type}
            error={submission.fields[index]?.value?.error}
            value={submission.fields[index]?.value.value ?? ""}
            onChange={inputChange}
            onBlur={(e) =>
              inputFocus(e, {
                isRequired: true,
                minLength: 2,
                maxLength: 15,
              })
            }
          />
        );
      })
    ) : loading ? (
      <Spinner />
    ) : (
      !loading && form.fields?.length && <div>Form didn't found</div>
    );
  return (
    <div className='form-submit-container'>
      <div className='form-submit-wrapper'>
        <div className='form-submit-header'>
          <h2>{form.formName}</h2>
        </div>
        <div className='form-submit-body'>
          {submissionForm}
          {form.fields.length ? (
            <div className='mt-2 text-center'>
              <button
                disabled={loading}
                onClick={handleFormSubmit}
                type='button'
                className='btn btn-success w-25'
              >
                Submit
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({
  form: { form },
  submission: { submission },
  ui: { redirect, isAuth, loading },
}) => {
  return { form, submission, loading, redirect };
};

export default connect(mapStateToProps, {
  getForm,
  submissionInputValidation,
  submissionInputChange,
  newSubmission,
})(FormSubmission);
