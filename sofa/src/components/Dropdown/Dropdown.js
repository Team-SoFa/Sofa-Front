import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ className, options, type, onSelect, label }) => {
  const [selectedValue, setSelectedValue] = useState(
    type === "SORTING" ? options[0] : ""
  ); //선택된 값 상태 관리
  const [isOpen, setIsOpen] = useState(false);

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
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <select
        className={`dropdown ${className}`}
        value={selectedValue}
        onChange={handleChange}
        onClick={toggleDropdown}
      >
        <option value="" disabled hidden>
          {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {options.map((option, index) => (
          <div key={index} className="option">
            {option}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Dropdown;
