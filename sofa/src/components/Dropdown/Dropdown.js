import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import { OutsideClick } from "../OutsideClick";
import Button from "../Button/Button";

import "./Dropdown.css";

const Dropdown = ({
  className,
  Icon,
  options,
  label,
  onSelect,
  onDelete,
  onMouseEnter,
  onMouseLeave,
}) => {
  const dropdownRef = useRef(null); //드롭다운 요소 참조를 위한 ref 생성
  const [isOpen, setIsOpen] = OutsideClick(dropdownRef, false); //OutsideClick 사용
  const [selectedValue, setSelectedValue] = useState(null); //선택된 값 상태 관리

  const handleSelect = (value) => {
    // className이 "alarm"일 때 label을 변경하지 않음
    if (className !== "alarm") {
      setSelectedValue(
        value.content === "폴더 전체" ? { label: "폴더 전체" } : value
      );
    }
    setIsOpen(false); // 드롭다운 닫기
    onSelect(value);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`dropdown ${className}`}
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`dropdown-header ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        {Icon && (
          <span
            className={`dropdown-header-img ${isOpen ? "rotated" : ""}`}
            aria-label="Icon"
          >
            <Icon />
          </span>
        )}
        {selectedValue ? (
          selectedValue.label
        ) : (
          <span className="dropdown-placeholder">{label}</span>
        )}
        {className === "alarm" && options?.length > 0 && (
          <span className="dropdown-badge"></span>
        )}
      </div>

      {(isOpen || className === "search-dropdown") && (
        <div className="dropdown-menu">
          {[
            ...(className === "dropdown-folder-select"
              ? [{ content: label, Icon: null }]
              : []),
            ...options,
          ].map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option.Icon && <option.Icon className="dropdown-option-img" />}
              <span onClick={() => handleSelect(option.content)}>
                {option.content}
              </span>
              <Button className="dropdown-select" label="선택" />
              {onDelete && (
                <Button
                  className="dropdown-delete"
                  label="✕"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(option.content);
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
