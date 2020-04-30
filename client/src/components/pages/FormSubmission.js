import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./formSubmission.css";
import { getForm } from "../../redux/actions/form";
import {
  submissionInputChange,
  checkSubmissionFormValidation,
  newSubmission,
  clearSubmissionState,
} from "../../redux/actions/submission";
import SubmissionInput from "../layouts/SubmissionInputs";
import Spinner from "../layouts/Spinner";
import { removeErrorFromObjects } from "../../utility";
import { clearUi } from "../../redux/actions/ui";
const FormSubmission = ({
  getForm,
  form,
  submission,
  match,
  submissionInputChange,
  checkSubmissionFormValidation,
  newSubmission,
  loading,
  redirect,
  clearUi,
  clearSubmissionState,
}) => {
  const formValidation = {
    isRequired: true,
    minLength: 2,
    maxLength: 256,
  };
  const formId = match.params.id;
  useEffect(() => {
    getForm(formId);
    return () => {
      clearUi();
      clearSubmissionState();
    };
  }, [getForm, clearUi, clearSubmissionState, formId]);
  const inputChange = (event) => {
    const { value, id, name } = event.currentTarget;
    submissionInputChange({ id, name, value });
  };

  const inputFocus = () => {
    const form = submission?.fields?.length ? submission.fields : [];
    checkSubmissionFormValidation({ form, formValidation });
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
        const { type } = field;
        return (
          <SubmissionInput
            key={index}
            id={index}
            name={field.name}
            type={type}
            error={submission.fields[index]?.value?.error}
            value={submission.fields[index]?.value.value ?? ""}
            onChange={inputChange}
            onBlur={inputFocus}
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
      {redirect && <Redirect to={redirect} />}
      <div className='form-submit-wrapper'>
        <div className='form-submit-header'>
          <h2>{form.formName}</h2>
        </div>
        <div className='form-submit-body'>
          {submissionForm}
          {form.fields?.length && (
            <div className='mt-5 text-center'>
              <button
                disabled={loading || !submission.isValid}
                onClick={handleFormSubmit}
                type='button'
                className='btn btn-success'
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({
  form: { form },
  submission: { submission },
  ui: { redirect, loading },
}) => {
  return { form, submission, loading, redirect };
};

export default connect(mapStateToProps, {
  getForm,
  checkSubmissionFormValidation,
  submissionInputChange,
  newSubmission,
  clearUi,
  clearSubmissionState,
})(FormSubmission);
