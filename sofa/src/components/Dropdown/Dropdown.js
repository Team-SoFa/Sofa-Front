import React, { useState, useRef } from "react";
import "./Dropdown.css";
import { OutsideClick } from "../OutsideClick";

const Dropdown = ({ className, options, label, onSelect }) => {
  const dropdownRef = useRef(null); //드롭다운 요소 참조를 위한 ref 생성
  const [isOpen, setIsOpen] = OutsideClick(dropdownRef, false); //OutsideClick 사용
  const [selectedValue, setSelectedValue] = useState(null); //선택된 값 상태 관리

  const handleSelect = (value) => {
    // className이 "alarm"일 때 label을 변경하지 않음
    if (className !== "alarm") {
      setSelectedValue(value);
    }
    setIsOpen(false); // 드롭다운 닫기
    onSelect(value);
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
        {className === "alarm" && options?.length > 0 && (
          <span className="dropdown-badge"></span>
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
