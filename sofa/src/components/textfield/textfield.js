// src/components/TextField.js
import React from "react";
import "./Textfield.css"; // 스타일 파일 (선택)

const TextField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  img,
}) => {
  return (
    <div className="text-field">
      {label && <label className="text-field-label">{label}</label>}
      <div className="text-filed-wrapper">
        {img && <img className="text-field-img" src={img} alt="Field Icon" />}
        <input
          className="text-field-input"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};

export default TextField;
