import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { OutsideClick } from "../OutsideClick";
import Button from "../Button/Button";
import TextField from "../Textfield/Textfield";

import "./Dropdown.css";
import AlarmFilledIcon from "../../assets/icon/AlarmFilledIcon";
import SearchIcon from "../../assets/icon/SearchIcon";
import { customTagsPost } from "../../services/tagSerivce";

const Dropdown = ({
  className,
  type,
  options = [],
  label,
  Icon, // header icon
  imgSrc,
  userInfo,
  onSelect = () => {},
  onDelete, // 옵션 삭제
  recentTags = [], //최근 검색 태그
  onOpen,
  onAddValue, //추가된 값 처리 함수
  setTagsOpt = () => {}, //태그 목록 수정 함수
  onSearchSelect,
  linkCardId, // linkCard의 ID를 props로 전달받음
}) => {
  const dropdownRef = useRef(null); //드롭다운 요소 참조를 위한 ref 생성
  const [isHovered, setIsHovered] = useState(false); // hover 상태 관리
  const [isOpen, setIsOpen] = OutsideClick(dropdownRef, false); //OutsideClick 사용
  const [selectedValue, setSelectedValue] = useState(null); //선택된 값 상태 관리
  // options 추가
  const [optionsList, setOptionsList] = useState(options); // options 상태
  const [addValue, setAddValue] = useState(null); //텍스트 필드 입력값
  const [newTagValue, setNewTagValue] = useState(""); // 새 태그 생성 필드 값

  useEffect(() => {
    setOptionsList(options); // 외부 options가 변경될 때 optionsList 업데이트
  }, [options]);

  const handleSelect = (value) => {
    // className이 "alarm"일 때 label을 변경하지 않음
    if (className !== "alarm") {
      setSelectedValue(
        value.content === "폴더 전체" ? { label: "폴더 전체" } : value
      );
    }

    // 중복된 태그가 아닌 경우만 추가
    setTagsOpt((prevTags) => {
      // 중복된 태그가 있는지 검사
      if (!prevTags.some((tag) => tag.label === value.label)) {
        return [...prevTags, value]; // 중복이 없을 경우에만 추가
      }
      return prevTags; // 중복일 경우 기존 상태 반환
    });

    setSelectedValue(null); // 선택된 값을 상태로 저장
    onSelect(value); // 부모 컴포넌트로 선택한 값 전달
  };

  // 새로운 값 추가
  const handleAdd = (newValue) => {
    if (!newValue) return; // 빈 값 무시

    const newOption = { name: newValue, content: newValue, label: newValue };
    setOptionsList((prevOptions) => {
      if (!prevOptions.some((option) => option.label === newOption.label)) {
        return [...prevOptions, newOption];
      }
      return prevOptions;
    });

    setTagsOpt((prevTags) => {
      if (!prevTags.some((tag) => tag.label === newOption.label)) {
        return [...prevTags, newOption];
      }
      return prevTags;
    });

    setAddValue(""); // 입력 필드 초기화
    onAddValue(newValue); // 부모 컴포넌트로 값 전달
  };

  const toggleDropdown = () => {
    const nextState = !isOpen; // 드롭다운의 다음 상태
    setIsOpen(nextState); // 드롭다운 상태 업데이트

    // 드롭다운이 열릴 때(onOpen이 전달된 경우에만 호출)
    if (nextState && onOpen) {
      onOpen(); // 드롭다운 열림 시 외부에서 전달된 핸들러 호출
    }
  };

  // 검색된 태그 목록 필터링
  const filteredTags = addValue
    ? optionsList.filter((option) =>
        option.label?.toLowerCase().includes(addValue?.toLowerCase())
      )
    : optionsList;

  const handleTagSelect = (tag) => {
    // 선택된 태그만 추가
    setTagsOpt((prevTags) => {
      if (!prevTags.some((existingTag) => existingTag.label === tag.label)) {
        return [...prevTags, tag];
      }
      return prevTags; // 중복 태그 무시
    });
  };

  const handleAddNewTag = async (tagName) => {
    if (!tagName.trim()) return; // 빈 값 방지

    try {
      const data = {
        name: tagName,
      };
      const newTag = await customTagsPost(data); // 태그 생성 API 호출
      if (newTag) {
        console.log("태그 생성 성공:", newTag);

        // 반환된 newTag 데이터의 구조를 확인하여 올바르게 매핑
        const tagData = {
          id: newTag.name, // newTag의 id
          label: newTag.id, // newTag의 name
          content: newTag.id, // name을 content로 설정
          type: "CUSTOM", // type은 고정된 값으로 설정
        };
        // 부모 컴포넌트로 새 태그 전달
        onAddValue(tagData);

        setNewTagValue(""); // 입력 필드 초기화
      }
    } catch (error) {
      console.error("태그 생성 실패:", error);
    }
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
      {/*DROPDOWN HEADER >>>>>>>>>> */}
      <div
        className={`dropdown-header ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        {/* alarm 아이콘 */}
        {className === "alarm" ? (
          <span
            className={`dropdown-header-icon ${isOpen ? "rotated" : ""}`}
            aria-label="Icon"
          >
            {isHovered || isOpen ? <AlarmFilledIcon /> : <Icon />}{" "}
            {/* hover 또는 메뉴가 열렸을 때 AlarmFilled */}
          </span>
        ) : (
          // 일반적인 경우의 아이콘
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
        {className === "alarm" &&
          options?.some((option) => option.isNew) && ( // isNew 값이 true인 항목이 하나라도 있으면 배지 표시
            <span className="dropdown-badge"></span>
          )}
      </div>
      {/* <<<<<<<<<< DROPDOWN HEADER */}

      {/* DROPDOWN MENU >>>>>>>>>> */}
      {(isOpen || className === "search-dropdown") && (
        <div className="dropdown-menu">
          {/* 유저페이지 유저 정보 */}
          {className === "user-info" && userInfo && (
            <div className="dropdown-user-info">
              <img
                src={
                  userInfo.profileImage ||
                  `${process.env.PUBLIC_URL}/example.png`
                }
                alt="Profile"
                className="dropdown-user-profile"
              />
              <span>
                {userInfo.name ? `${userInfo.name}님` : "이름없는 방문자"}
              </span>
              <span className="dropdown-user-email">{userInfo.email}</span>
            </div>
          )}

          {/* 1. 일반적인 드롭다운 메뉴 */}
          {type !== "tag" &&
            className !== "alarm" &&
            [
              ...(className === "basic"
                ? [{ content: label, Icon: null }]
                : []),
              ...options,
            ].map((option, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleSelect(option)}
              >
                {/* 1. option.아이콘 있으면 아이콘 */}
                {option.Icon && (
                  <option.Icon className="dropdown-option-icon" />
                )}
                {/* 2. content */}
                <span>{option.content}</span>
                {/* 3. 선택or삭제 버튼 */}
                {onDelete ? (
                  <Button
                    className="dropdown-delete"
                    label="✕"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(option.content);
                    }}
                  />
                ) : (
                  <Button className="dropdown-select" label="선택" />
                )}
              </div>
            ))}

          {/* === ALARM === */}
          {className === "alarm" &&
            options.map((option, index) => (
              <div className="dropdown-option" key={index}>
                <div className="alarm-option-header">
                  <div className="left">
                    {option.Icon && <option.Icon className="alarm-icon" />}
                    <h5 className="alarm-label">{option.label}</h5>
                  </div>
                  <div className="right">
                    <span className="alarm-date">{option.date}</span>
                    {option.isNew && <span className="alarm-new"></span>}
                  </div>
                </div>
                <span className="alarm-content">{option.content}</span>
              </div>
            ))}

          {/* type이 add일 경우 */}
          {type === "add" && (
            <div className="dropdown-add">
              <TextField
                className="inside-dropdown"
                placeholder="새 폴더 생성"
                onChange={(e) => setAddValue(e.target.value)}
                value={addValue}
                options={options}
                onAddValue={handleAdd} //부모로부터 값 추가 처리
              />
            </div>
          )}

          {/* type이 tag일 경우 */}
          {type === "tag" && (
            <div className="dropdown-tag-menu">
              <TextField
                className="inside-dropdown"
                Icon={SearchIcon}
                placeholder="태그를 검색해보세요."
                value={addValue}
                options={options}
                onChange={(e) => {
                  const value = e.target.value;
                  setAddValue(value); // 검색 필드 값 업데이트
                  onSearchSelect(value); // 검색 API 호출
                }}
              />
              {/* 조건에 따라 태그 목록 렌더링 */}
              {addValue && filteredTags.length > 0 ? (
                <div className="filtered-tags">
                  {filteredTags.map((tag) => (
                    <span key={tag.label} className="tag-option">
                      <Button
                        className="tag-selectable"
                        label={tag.label}
                        option={tag}
                        onClick={() => handleSelect(tag)}
                      />
                    </span>
                  ))}
                </div>
              ) : (
                <div className="recent-tags">
                  {recentTags.map((tag) => (
                    <span key={tag.label} className="recent-tag">
                      <Button
                        className="tag-selectable"
                        label={tag.label}
                        option={tag}
                        onClick={() => handleSelect(tag)}
                      />
                    </span>
                  ))}
                </div>
              )}
              {className === "detail-tag" && (
                <div className="dropdown-add">
                  <TextField
                    className="inside-dropdown"
                    placeholder="새 태그 생성"
                    value={newTagValue}
                    options={options}
                    onChange={(e) => setNewTagValue(e.target.value)} // 새 태그 생성 값 업데이트
                    onAddValue={() => handleAddNewTag(newTagValue)} // 새 태그 추가 함수 호출
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
