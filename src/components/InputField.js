import React from 'react'

const InputField = ({ name, type, onChange, inputClassName, id, placeholder, htmlFor, labelClass, label }) => {
    return (
        <>
            <label htmlFor={htmlFor} className={labelClass}> {label}</label>
            <input
                name={name}
                type={type}
                id={id}
                placeholder={placeholder}
                htmlFor={htmlFor}
                className={inputClassName}
                onChange={onChange}
            />

        </>
    )
}

export default InputField
