import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = ({ className, options, label }) => {
  const [selectedValue, setSelectedValue] = useState(null); //선택된 값 상태 관리
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); //close dropdown
      }
    };
  });

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${className}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedValue ? (
          selectedValue.label
        ) : (
          <span className="dropdown-placeholder">{label}</span>
        )}
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
