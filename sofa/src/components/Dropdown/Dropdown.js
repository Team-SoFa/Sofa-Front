import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import { OutsideClick } from "../OutsideClick";
import Button from "../Button/Button";
import TextField from "../Textfield/Textfield";

import "./Dropdown.css";
import AlarmFilledIcon from "../../assets/icon/AlarmFilledIcon";

const Dropdown = ({
  className,
  type,
  options,
  label,
  Icon,
  imgSrc,
  userInfo,
  onSelect,
  onDelete,
}) => {
  const dropdownRef = useRef(null); //드롭다운 요소 참조를 위한 ref 생성
  const [isHovered, setIsHovered] = useState(false); // hover 상태 관리
  const [isOpen, setIsOpen] = OutsideClick(dropdownRef, false); //OutsideClick 사용
  const [selectedValue, setSelectedValue] = useState(null); //선택된 값 상태 관리
  const [addValue, setAddValue] = useState(null); //검색용 데이터

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

  const handleAdd = (value) => {
    setAddValue(value);
  };

  return (
    <div
      className={`dropdown ${className}`}
      ref={dropdownRef}
      onMouseEnter={() => setIsHovered(true)} // hover 시작
      onMouseLeave={() => setIsHovered(false)} // hover 종료
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`dropdown-header ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        {/* alarm 클래스일 경우만 아이콘을 A, B로 지정 */}
        {className === "alarm" ? (
          <span
            className={`dropdown-header-icon ${isOpen ? "rotated" : ""}`}
            aria-label="Icon"
          >
            {isHovered || isOpen ? <AlarmFilledIcon /> : <Icon />}{" "}
            {/* hover 또는 메뉴가 열렸을 때 B 아이콘 */}
          </span>
        ) : (
          Icon && (
            <span
              className={`dropdown-header-icon ${isOpen ? "rotated" : ""}`}
              aria-label="Icon"
            >
              <Icon />
            </span>
          )
        )}
        {imgSrc && (
          <img className="dropdown-header-img" src={imgSrc} alt={"profile"} />
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
          {/* type이 user-info일 경우 상단 고정 공간 */}
          {type === "user-info" && userInfo && (
            <div className="dropdown-user-info">
              <img
                src={userInfo.profileImage}
                alt="Profile"
                className="dropdown-user-profile"
              />
              <span className="dropdown-user-name">{userInfo.name}님</span>
              <span className="dropdown-user-email">{userInfo.email}</span>
            </div>
          )}
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
              {option.Icon && <option.Icon className="dropdown-option-icon" />}
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

          {/* type이 add일 경우 하단 고정 공간 */}
          {type === "add" && (
            <div className="dropdown-add">
              <TextField
                className="dropdown-add-input"
                placeholder="폴더명"
                onChange={(e) => setAddValue(e.target.value)}
                value={addValue}
              />
              <Button
                className="dropdown-add-button"
                label="추가"
                onClick={handleAdd}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
