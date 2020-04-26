import React from "react";

const SelectInput = ({ id, options, onChange }) => {
  return (
    <select id={id} onChange={onChange} className='form-control'>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
};
export default SelectInput;
