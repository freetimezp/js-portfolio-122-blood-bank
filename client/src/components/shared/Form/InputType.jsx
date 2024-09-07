import React from 'react';

const InputType = ({ labelText, labelFor, inputType, name, value, onChange }) => {
    return (
        <div className="mb-3">
            <label htmlFor={labelFor} className="form-label">
                {labelText}
            </label>
            <input
                type={inputType}
                className="form-control"
                name={name}
                value={value}
                placeholder={labelText}
                onChange={onChange}
                required
            />
        </div>
    );
}

export default InputType;
