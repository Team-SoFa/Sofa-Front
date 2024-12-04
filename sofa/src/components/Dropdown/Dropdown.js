import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import { OutsideClick } from "../OutsideClick";
import Button from "../Button/Button";

import "./Dropdown.css";
import AlarmFilledIcon from "../../assets/icon/AlarmFilledIcon";

const Dropdown = ({ className, Icon, options, label, onSelect, onDelete }) => {
  const dropdownRef = useRef(null); //드롭다운 요소 참조를 위한 ref 생성
  const [isHovered, setIsHovered] = useState(false); // hover 상태 관리
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
      onMouseEnter={() => setIsHovered(true)} // hover 시작
      onMouseLeave={() => setIsHovered(false)} // hover 종료
      //onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`dropdown-header ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        {/* alarm 클래스일 경우만 아이콘을 A, B로 지정 */}
        {className === "alarm" ? (
          <span
            className={`dropdown-header-img ${isOpen ? "rotated" : ""}`}
            aria-label="Icon"
          >
            {isHovered || isOpen ? <AlarmFilledIcon /> : <Icon />}{" "}
            {/* hover 또는 메뉴가 열렸을 때 B 아이콘 */}
          </span>
        ) : (
          Icon && (
            <span
              className={`dropdown-header-img ${isOpen ? "rotated" : ""}`}
              aria-label="Icon"
            >
              <Icon />
            </span>
          )
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
