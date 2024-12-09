import React, { useState } from "react";
import "./Accordion.css";
import DownIcon from "../../assets/icon/DownIcon";

const Accordion = ({ title, content, type, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (onToggle) {
      onToggle(nextState); // 상태 변경 시 콜백 호출
    }
  };

  return (
    <div className={`accordion ${type}`} onClick={(e) => e.stopPropagation()}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <p>{title}</p>
        <span className={`accordion-icon ${isOpen ? "rotated" : ""}`}>
          <DownIcon />
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
