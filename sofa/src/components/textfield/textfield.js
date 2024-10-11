// src/components/TextField.js
import React from "react";
import "./textfield.css"; // 스타일 파일 (선택)

const TextField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div className="text-field">
      {label && <label className="text-field-label">{label}</label>}
      <input
        className="text-field-input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextField;
