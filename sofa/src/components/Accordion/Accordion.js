import React, { useState } from "react";
import "./Accordion.css";
import DownIcon from "../../assets/icon/DownIcon";
// import openIcon from "example.png";
// import closeIcon from "example.png";

const Accordion = ({ title, content, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${type}`}>
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
