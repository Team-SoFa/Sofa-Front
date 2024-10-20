import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, type, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(""); //선택된 값 상태 관리

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    if (value) {
      onSelect(value); //부모 컴포넌트에 선택된 태그 전달
      setSelectedValue(""); //드롭다운 초기화
    }
  };

  const placeholder = type === "folder" ? "폴더 선택" : "태그 선택";

  return (
    <div className="dropdown-container">
      <select
        className="dropdown"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
