import React, { useEffect } from "react";
import { connect } from "react-redux";
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
import Button from "../layouts/Button";
import { removeErrorFromObjects } from "../../utility";
import { clearUi } from "../../redux/actions/ui";
const FormSubmission = ({
  history,
  getForm,
  form,
  submission,
  match,
  submissionInputChange,
  checkSubmissionFormValidation,
  newSubmission,
  redirect,
  clearUi,
  clearSubmissionState,
}) => {
  redirect && history.push(redirect);
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
  const submissionForm = form?.fields?.length
    ? form.fields.map((field, index) => {
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
    : null;
  return (
    <div className='form-submit-container'>
      <Spinner />
      {submissionForm ? (
        <div className='form-submit-wrapper'>
          <div className='form-submit-header'>
            <h2>{form.formName}</h2>
          </div>
          <div className='form-submit-body'>
            {submissionForm}
            <div className='mt-5 text-center'>
              <Button
                disabled={!submission.isValid}
                className='btn btn-success'
                text='Submit'
                type='button'
                onClick={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = ({
  form: { form },
  submission: { submission },
  ui: { redirect },
}) => {
  return { form, submission, redirect };
};

export default connect(mapStateToProps, {
  getForm,
  checkSubmissionFormValidation,
  submissionInputChange,
  newSubmission,
  clearUi,
  clearSubmissionState,
})(FormSubmission);
