import React from "react";
import "./input.css";

const Input = ({
  id,
  name,
  type,
  required,
  error,
  value,
  onChange,
  onBlur,
}) => {
  const inputClass = error ? "form-control is-invalid" : "form-control";
  return (
    <div className='input-container p-2'>
      <label>
        <strong>
          {name} {required && <span>*</span>}
        </strong>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={`Enter ${name}`}
        autoComplete='off'
        className={inputClass}
      />
      {error && (
        <div className='invalid-feedback'>
          <small className='text-danger'>{error}</small>
        </div>
      )}
    </div>
  );
};

export default Input;
