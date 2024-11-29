// src/components/TextField.js
import React, { useRef } from "react";
import "./Textfield.css"; // 스타일 파일 (선택)
import Dropdown from "../Dropdown/Dropdown";
import { OutsideClick } from "../OutsideClick";

const TextField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  img,
  recentSearches = [],
  onSearchSelect,
  onSearchDelete,
}) => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = OutsideClick(dropdownRef, false);

  const handleFocus = () => {
    setIsDropdownOpen(true);
  };

  return (
    <div className="text-field" ref={dropdownRef}>
      {label && <label className="text-field-label">{label}</label>}
      <div className="text-filed-wrapper">
        {img && <img className="text-field-img" src={img} alt="Field Icon" />}
        <input
          className="text-field-input"
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          required={required}
        />
      </div>
      {isDropdownOpen && recentSearches.length > 0 && (
        <Dropdown
          className="search-dropdown"
          options={recentSearches}
          label="최근검색"
          onSelect={(selected) => {
            onSearchSelect(selected); // 선택된 검색어를 부모 컴포넌트에 전달
            setIsDropdownOpen(false); // 선택 시 드롭다운 닫기
          }}
          onDelete={onSearchDelete}
        />
      )}
    </div>
  );
};

export default TextField;
