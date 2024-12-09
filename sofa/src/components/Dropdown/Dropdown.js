import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import { OutsideClick } from "../OutsideClick";
import Button from "../Button/Button";
import TextField from "../Textfield/Textfield";

import "./Dropdown.css";
import AlarmFilledIcon from "../../assets/icon/AlarmFilledIcon";
import SearchIcon from "../../assets/icon/SearchIcon";

const Dropdown = ({
  className,
  type,
  options,
  label,
  Icon,
  imgSrc,
  userInfo,
  onSelect,
  onDelete, // 옵션 삭제
  recentTags, //최근 검색 태그
  onOpen,
  onAddValue, //추가된 값 처리 함수
}) => {
  const dropdownRef = useRef(null); //드롭다운 요소 참조를 위한 ref 생성
  const [isHovered, setIsHovered] = useState(false); // hover 상태 관리
  const [isOpen, setIsOpen] = OutsideClick(dropdownRef, false); //OutsideClick 사용
  const [selectedValue, setSelectedValue] = useState(null); //선택된 값 상태 관리
  // options 추가
  const [optionsList, setOptionsList] = useState(options); // options 상태
  const [addValue, setAddValue] = useState(null); //텍스트 필드 입력값

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
    const nextState = !isOpen; // 드롭다운의 다음 상태
    setIsOpen(nextState); // 드롭다운 상태 업데이트

    // 드롭다운이 열릴 때(onOpen이 전달된 경우에만 호출)
    if (nextState && onOpen) {
      onOpen(); // 드롭다운 열림 시 외부에서 전달된 핸들러 호출
    }
  };

  // 새로운 값 추가
  const handleAdd = (newValue) => {
    const newOption = { content: newValue, label: newValue };
    setOptionsList([...optionsList, newOption]); // 새로운 값 추가
  };

  return (
    <div
      className={`dropdown ${className}`}
      ref={dropdownRef}
      onMouseEnter={() => setIsHovered(true)} // hover 시작
      onMouseLeave={() => setIsHovered(false)} // hover 종료
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
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
      {/* <<<<<<<<<< DROPDOWN HEADER */}

      {/* DROPDOWN MENU >>>>>>>>>> */}
      {(isOpen || className === "search-dropdown") && (
        <div className="dropdown-menu">
          {/* type이 user-info일 경우 */}
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

          {/* 일반적인 드롭다운 메뉴 */}
          {type !== "tag" &&
            [
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
                {/* 1. 아이콘 있으면 아이콘 */}
                {option.Icon && (
                  <option.Icon className="dropdown-option-icon" />
                )}
                {/* 2. 옵션 */}
                <span>{option.content}</span>
                {/* 3. 선택 버튼 */}
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

          {/* type이 add일 경우 */}
          {type === "add" && (
            <div className="dropdown-add">
              <TextField
                className="add"
                placeholder="새 폴더 생성"
                onChange={(e) => setAddValue(e.target.value)}
                value={addValue}
                onAddValue={handleAdd} //부모로부터 값 추가 처리
              />
            </div>
          )}

          {/* type이 tag일 경우 */}
          {type === "tag" && (
            <div className="dropdown-tag-menu">
              <TextField
                className="dropdown-tag-add"
                Icon={SearchIcon}
                placeholder="태그를 검색해보세요."
                recentSearches={options} //태그검색
                onChange={(e) => setAddValue(e.target.value)}
                value={addValue}
              />
              <div className="recent-tags">
                {recentTags.map((tag) => (
                  <span key={tag.label} className="recent-tag">
                    <Button
                      className="tag-selectable"
                      label={tag.label}
                      option={tag} // 태그 정보를 option으로 전달
                    />
                  </span>
                ))}
              </div>
              {className === "detail-tag" && (
                <div className="dropdown-add">
                  <TextField
                    className="add"
                    placeholder="새 폴더 생성"
                    onChange={(e) => setAddValue(e.target.value)}
                    value={addValue}
                    onAddValue={handleAdd} //부모로부터 값 추가 처리
                  />
                </div>
              )}
              {className !== "detail-tag" && (
                <>
                  <div className="vertical-line" />
                  <div className="selected-tags">
                    {options?.length > 0 &&
                      options.map((tag) => (
                        <span key={tag.label} className="selected-tag">
                          <Button
                            className="tag"
                            label={tag.label}
                            option={tag} // 태그 정보를 option으로 전달
                            onDelete={() => onDelete?.(tag.content)} // 삭제 함수가 전달되었다면 호출
                          />
                        </span>
                      ))}
                  </div>
                  <div className="vertical-line" />
                  <div className="dropdown-tag-btn-container">
                    <Button label="초기화" />
                    <Button label="적용" />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
