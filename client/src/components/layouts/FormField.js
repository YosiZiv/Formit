import React from "react";
import "./formField.css";
import Select from "./SelectInput";
const FormField = ({ id, label, name, type, onChange, onBlur }) => {
  const labelClass = label.error ? "form-control is-invalid" : "form-control";
  const nameClass = name.error ? "form-control is-invalid" : "form-control";
  return (
    <div id={id} className='form-field-container'>
      <div className='form-field-label'>
        <label>Enter Label</label>
        <input
          onBlur={onBlur}
          className={labelClass}
          id={"label"}
          onChange={onChange}
          value={label.value}
        />
        {label.error && <small className='text-danger'>{label.error}</small>}
      </div>
      <div className='form-field-name'>
        <label>Enter Name</label>
        <input
          onBlur={onBlur}
          className={nameClass}
          id={"name"}
          onChange={onChange}
          value={name.value}
        />
        {name.error && <small className='text-danger'>{name.error}</small>}
      </div>
      <div className='form-group'>
        <label>Select Type</label>
        <Select
          id={"type"}
          value={type}
          onChange={onChange}
          options={["text", "email", "password", "color", "tel", "number"]}
        />
      </div>
    </div>
  );
};
export default FormField;
