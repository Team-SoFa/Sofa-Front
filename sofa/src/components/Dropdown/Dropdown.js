import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";
import { OutsideClick } from "../OutsideClick";

const Dropdown = ({ className, options, label }) => {
  const dropdownRef = useRef(null); //드롭다운 요소 참조를 위한 ref 생성
  const [isOpen, setIsOpen] = OutsideClick(dropdownRef, false); //OutsideClick 사용
  const [selectedValue, setSelectedValue] = useState(null); //선택된 값 상태 관리

  const handleSelect = (value) => {
    //옵션 선택 시, 선택된 값 저장
    setSelectedValue(value);
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    //드롭다운 토글 함수
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>
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
