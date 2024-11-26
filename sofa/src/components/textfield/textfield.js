import React, { forwardRef } from "react";
import "./Textfield.css";

const TextField = forwardRef(
  (
    { label, 
      value, 
      onChange, 
      placeholder, 
      type = "text", 
      onKeyDown, 
      onClick, 
      required = false, 
      className },
    ref
  ) => {
    return (
      <div className="text-field">
        {label && <label className="text-field-label">{label}</label>}
        <input
          className={`text-field-input ${className || ""}`}
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onClick={onClick}
          placeholder={placeholder}
          required={required}
          ref={ref}
        />
      </div>
    );
  }
);

export default TextField;
