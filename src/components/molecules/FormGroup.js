import React from 'react';
import Input from '../atoms/Input';

function FormGroup({ label, type, placeholder, value, onChange, name, required, error }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        isInvalid={!!error}
      />
    </div>
  );
}

export default FormGroup;