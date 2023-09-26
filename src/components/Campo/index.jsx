import React from 'react';
import "./Campo.css"
import PropTypes from 'prop-types';


export const Campo = ({label,name,placeholder,required,value,setInputValue,type}) => {


  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className={`campo campo-${type}`}>
      <label htmlFor="input">{label}</label>
      <input
        type={!type ? "text" : type}
        id="input"
        placeholder={placeholder}
        name={name}
        required={required}
        value={value}
        onChange={handleChange}
        
      />
    </div>
  );
}

Campo.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  setInputValue: PropTypes.func,
  type: PropTypes.string,
}
