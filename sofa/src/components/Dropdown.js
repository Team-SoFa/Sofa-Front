import React, { useState } from "react";
import "../styles/Dropdown.css";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(""); //선택된 값 상태 관리
  const options = ["Option1", "Option2", "Option3"]; //드롭박스 옵션 리스트

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select
        className="dropdown"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="" disabled>
          옵션을 선택하세용
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedValue && (
        <p className="selected-value">당신이 고른 것 : {selectedValue}</p>
      )}
    </div>
  );
};

export default Dropdown;
