import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getForm } from "../../redux/actions/form";
import {
  submissionInputChange,
  submissionInputValidation,
  newSubmission,
} from "../../redux/actions/submission";
import SubmissionField from "../layouts/SubmissionField";
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
}) => {
  useEffect(() => {
    const formId = match.params.id;
    getForm(formId);
  }, []);
  const inputChange = (event) => {
    const { value, id } = event.currentTarget;
    const { id: field } = event.currentTarget.parentNode;
    console.log(value, id);

    submissionInputChange({ field, id, value });
  };
  const inputFocus = (event, validation) => {
    const { value, id } = event.currentTarget;
    const { id: field } = event.currentTarget.parentNode;
    console.log("input focus out", value, id, field);
    submissionInputValidation({ field, id, value, validation });
  };
  const handleFormSubmit = () => {
    console.log(form);
    const filterFields = {
      formName: form.formName,
      formId: match.params.id,
      fields: removeErrorFromObjects(submission.fields),
    };
    console.log(filterFields);

    newSubmission(filterFields);
  };
  const submissionForm = form.fields?.length ? (
    form.fields.map((field, index) => {
      const { label, type } = field;
      console.log("IMPORTENT", submission.fields[index]?.value);
      return (
        <SubmissionField
          key={index}
          id={index}
          label={label}
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
  ) : (
    <div>Form didn't found</div>
  );

  return (
    <div className='form-submit-container'>
      <div className='form-submit-name text-center'>
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
  );
};
const mapStateToProps = ({
  submission: { form, submission },
  ui: { redirect, isAuth, loading },
}) => {
  return { form, submission, loading };
};

export default connect(mapStateToProps, {
  getForm,
  submissionInputValidation,
  submissionInputChange,
  newSubmission,
})(FormSubmission);
