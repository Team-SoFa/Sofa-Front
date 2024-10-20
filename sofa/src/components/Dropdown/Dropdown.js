import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(""); //선택된 값 상태 관리
  const options = ["깃허브공부", "취미", "프론트엔드"]; //드롭박스 옵션 리스트

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
          폴더선택
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
