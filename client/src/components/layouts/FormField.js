import React from "react";
import "./formField.css";
import Select from "./SelectInput";
import Input from "./Input";
const FormField = ({ id, label, name, type, onChange, onBlur }) => {
  const labelClass = label.error ? "form-control is-invalid" : "form-control";
  const nameClass = name.error ? "form-control is-invalid" : "form-control";
  return (
    <div id={id} className='form-field-container'>
      <div className='form-field'>
        <Input
          onBlur={onBlur}
          className={labelClass}
          id='label'
          name='label'
          error={label.error}
          type='text'
          onChange={onChange}
          value={label.value}
        />
      </div>
      <div className='form-field'>
        <Input
          required
          onBlur={onBlur}
          className={nameClass}
          id='name'
          name='name'
          error={name.error}
          type='text'
          onChange={onChange}
          value={name.value}
        />
      </div>
      <div className='form-field'>
        <Select
          required
          id='type'
          label='type'
          value={type}
          onChange={onChange}
          options={["text", "email", "password", "color", "tel", "number"]}
        />
      </div>
    </div>
  );
};
export default FormField;
