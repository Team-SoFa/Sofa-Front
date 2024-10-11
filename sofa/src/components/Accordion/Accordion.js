import React, { useState } from "react";
import "./Accordion.css";
// import openIcon from "example.png";
// import closeIcon from "example.png";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <img
          src={isOpen ? "example.png" : "example.png"}
          alt={isOpen ? "Open" : "Close"}
          className="accordion-icon"
        />
      </div>
      {isOpen && <p className="accordion-content">{content}</p>}
    </div>
  );
};

export default Accordion;
