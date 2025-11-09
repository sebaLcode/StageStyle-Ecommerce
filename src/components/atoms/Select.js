import React from 'react';

function Select({ value, onChange, required, disabled, options = [], name }) {
  return (
    <select
      className="form-select"
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      name={name}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;