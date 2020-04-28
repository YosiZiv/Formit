import React from "react";
import "./submissionInputs.css";

const SubmissionInput = ({
  id,
  name,
  type,
  error,
  value,
  onChange,
  onBlur,
}) => {
  const inputClass = error ? "form-control is-invalid" : "form-control";
  const pattern = type === "tel" ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : "";
  return (
    <div className='submission-input-container'>
      <label>
        <strong>{name}</strong>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete='off'
        className={inputClass}
        pattern={pattern}
      />
      {error && (
        <div className='invalid-feedback'>
          <small className='text-danger'>{error}</small>
        </div>
      )}
    </div>
  );
};

export default SubmissionInput;
