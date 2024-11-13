import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ className, type, options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(
    type === "SORTING" ? options[0] : ""
  ); //선택된 값 상태 관리

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);

    if (value) {
      if (type === "TAG" && onSelect) {
        onSelect(value);
        setSelectedValue(""); //tag 선택 후, 드롭다운 초기화
      } else if (type === "SORTING" && onSelect) {
        onSelect(value); // sorting type일 시, onSelect 호출만 하고 초기화는 하지 않음
      }
    }
  };

  const placeholder = type === "folder" ? "폴더 선택" : "태그 선택";

  return (
    <div className="dropdown-container">
      <select
        className={`dropdown ${className}`}
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="" disabled hidden>
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
