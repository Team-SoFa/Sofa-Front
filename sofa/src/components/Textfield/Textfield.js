import React, { useRef, forwardRef } from "react";
import "./Textfield.css"; // 스타일 파일 (선택)
import Dropdown from "../Dropdown/Dropdown";
import { OutsideClick } from "../OutsideClick";
import Button from "../Button/Button"; // Button 컴포넌트 추가
import AddIcon from "../../assets/icon/AddIcon";

const TextField = forwardRef(
  (
    {
      className,
      label,
      value,
      onChange,
      placeholder,
      required = false,
      Icon,
      recentSearches,
      onSearchSelect,
      onSearchDelete,
      onFetchSearches, // 새로운 prop 추가 (클릭 시 호출될 API 핸들러)
      onAddValue, //부모에서 값을 추가할 수 있도록 prop 추가
    },
    ref
  ) => {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, toggleDropdown] = OutsideClick(dropdownRef, false);

    const handleFocus = () => {
      if (!isDropdownOpen) {
        toggleDropdown(true);
      }
    };

    const handleClick = async (e) => {
      e.stopPropagation(); // 이벤트 전파 방지
      if (!isDropdownOpen) {
        toggleDropdown(true); // 드롭다운 열기
      }
      if (onFetchSearches) {
        // API 호출
        await onFetchSearches();
      }
    };

    const handleSelectSearch = (selected) => {
      onSearchSelect(selected.content); // 부모 컴포넌트로 선택된 값을 전달
      toggleDropdown(false); // 선택 시 드롭다운 닫기
      if (onAddValue) onAddValue(selected.content); // 선택된 값을 태그로 추가
    };

    // 입력된 값을 부모에게 전달하여 Dropdown에 추가
    const handleAdd = () => {
      if (onAddValue && value.trim()) {
        onAddValue(value.trim());
      }
    };

    return (
      <div className={`text-field ${className}`} ref={dropdownRef}>
        {label && <label className="text-field-label">{label}</label>}
        <div className="text-field-wrapper" onClick={toggleDropdown}>
          {/* 아이콘 추가 */}
          {Icon && (
            <span className="text-field-img" aria-label="Field Icon">
              <Icon />
            </span>
          )}
          {/* 입력 받는 부분 */}
          <input
            className="text-field-input"
            type="text"
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onClick={handleClick} // 클릭 이벤트 추가
            placeholder={placeholder}
            required={required}
            ref={ref}
          />
          {/* +버튼 */}
          {className === "add" && (
            <Button
              className="text-field-add-button"
              Icon={AddIcon}
              onClick={handleAdd}
            />
          )}
        </div>
        {className !== "inside-dropdown"
          ? isDropdownOpen &&
            recentSearches.length > 0 && (
              <Dropdown
                className="search-dropdown"
                options={recentSearches}
                label="최근검색"
                onSelect={handleSelectSearch}
                onDelete={onSearchDelete}
              />
            )
          : isDropdownOpen && (
              // <DropdownSearch
              //   className="dropdown-searchers"
              //   options={recentSearches}
              //   label=""
              //   onSelect={handleSelectSearch}
              // />
              // 나중에 하자. 문제는 DropdownSearch.js에 있음
              <span></span>
            )}
      </div>
    );
  }
);

export default TextField;
