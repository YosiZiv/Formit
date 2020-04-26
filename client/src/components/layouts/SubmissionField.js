import React from "react";
const SubmissionField = ({
  id,
  label,
  error,
  value,
  type,
  onChange,
  onBlur,
}) => {
  const labelClass = label.error ? "form-control is-invalid" : "form-control";
  const nameClass = error ? "form-control is-invalid" : "form-control";
  return (
    <div id={id} className='submission-field-container'>
      <div className='submission-field-label'>
        <label>{label}</label>
      </div>
      <input
        onBlur={onBlur}
        className={labelClass}
        id={label}
        onChange={onChange}
        value={value}
        type={type}
        className={nameClass}
      />
      {label.error && <small className='text-danger'>{label.error}</small>}
    </div>
  );
};
export default SubmissionField;
