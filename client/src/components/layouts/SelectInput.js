import React from "react";

const SelectInput = ({ id, label, options, onChange }) => {
  return (
    <div className='input-container'>
      <label>
        <strong>{label}</strong>
      </label>
      <select id={id} onChange={onChange} className='form-control'>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectInput;
