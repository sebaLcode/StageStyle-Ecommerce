import React from 'react';
import Select from '../atoms/Select'

function SelectGroup({label, value, onChange, required, disabled, options, name}){
    return (
        <div className = "col mb-4">
            <label className="form-label">{label}</label>

            <Select 
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                options={options}
                name={name}
            />
        </div>
    );
}

export default SelectGroup;