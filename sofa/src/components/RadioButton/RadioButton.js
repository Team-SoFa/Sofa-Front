import React, { useState } from "react";
import "./RadioButton.css";
import TextField from "../Textfield/Textfield";

function RadioButton({ options = [], name, onChange }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOtherSelected, setIsOtherSelected] = useState(false); // "기타" 선택 여부

  const handleChange = (value) => {
    setSelectedOption(value);
    setIsOtherSelected(value === "other"); // "기타" 선택 시 상태 업데이트
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="radio-button-group">
      {options.map((option) => (
        <div key={option.value}>
          <label className="radio-button">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => handleChange(option.value)}
            />
            <span className="radio-label">{option.label}</span>
          </label>
          {/* "기타" 선택 시 TextInput 컴포넌트 렌더링 */}
          {option.value === "other" && isOtherSelected && (
            <TextField
              className="radio-textField"
              placeholder="떠나시는 이유를 말씀해주세요.😹"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default RadioButton;
