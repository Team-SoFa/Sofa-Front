import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./Accordion.css";
import DownIcon from "../../assets/icon/DownIcon";
import AddIcon from "../../assets/icon/AddIcon";

const Accordion = ({ title, content, type, onToggle, isModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태
  const folderEdit = "어쩌구";

  const toggleAccordion = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (onToggle) {
      onToggle(nextState); // 상태 변경 시 콜백 호출
    }
  };

  // Modal Contents >>>>>>>>>>>>>>>>>>
  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <div className={`accordion ${type}`} onClick={(e) => e.stopPropagation()}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <p>{title}</p>
        <span className={`accordion-icon ${isOpen ? "rotated" : ""}`}>
          <DownIcon />
        </span>
        {isModal === "true" && (
          <Dropdown
            className="add-folder"
            Icon={AddIcon}
            options={folderEdit}
            onSelect={openModal}
          />
        )}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
