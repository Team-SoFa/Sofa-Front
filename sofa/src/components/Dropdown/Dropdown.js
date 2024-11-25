import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";
import { OutsideClick } from "../OutsideClick";

const Dropdown = ({ className, options, label }) => {
  const dropdownRef = useRef(null); //드롭다운 요소 참조를 위한 ref 생성
  const [isOpen, setIsOpen] = OutsideClick(dropdownRef, false); //OutsideClick 사용
  const [selectedValue, setSelectedValue] = useState(null); //선택된 값 상태 관리

  const handleSelect = (value) => {
    //alarm은 옵션으로 변경 안함
    if (className !== "alarm") {
      setSelectedValue(value);
    }
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
              {option.img && (
                <img src={option.img} alt="" className="dropdown-option-img" />
              )}
              {option.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
