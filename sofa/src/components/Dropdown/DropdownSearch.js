import React from "react";
import { OutsideClick } from "../OutsideClick";
import Button from "../Button/Button";
import TextField from "../Textfield/Textfield";

import "./Dropdown.css";
import AlarmFilledIcon from "../../assets/icon/AlarmFilledIcon";
import SearchIcon from "../../assets/icon/SearchIcon";
import { customTagsPost } from "../../services/tagSerivce";

const DropdownSearch = ({
  className,
  options, // 검색 대상 : 전체 폴더/태그 목록
  onSelect,
}) => {
  const dropdownRef = useRef(null); //드롭다운 요소 참조를 위한 ref 생성
  const [isHovered, setIsHovered] = useState(false); // hover 상태 관리

  const handleSelect = () => {};

  return (
    <div
      className={"dropdown-searcher"}
      onMouseEnter={() => setIsHovered(true)} // hover 시작
      onMouseLeave={() => setIsHovered(false)} // hover 종료
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      {className === "dropdown-searchers" &&
        options.map((option, index) => (
          <div
            key={index}
            className="dropdown-option"
            onClick={() => handleSelect(option)}
          >
            {/* 1. content */}
            <span>{option.content}</span>
            {/* 2. 선택 버튼 */}
            <Button className="dropdown-select" label="선택" />
          </div>
        ))}
    </div>
  );
};

export default DropdownSearch;
