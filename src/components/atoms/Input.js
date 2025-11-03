import React from 'react';


function Input({ type, placeholder, value, onChange, name, required, isValid, isInvalid }) {
    const inputClass = `form-control ${isValid ? 'is-valid' : ''} ${isInvalid ? 'is-invalid' : ''}`;
    return (<input
        type={type}
        className={inputClass}


        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
    />

    );
}

export default Input;