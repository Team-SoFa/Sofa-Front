// src/components/Modal.js
import React, { useRef } from "react";
import { OutsideClick } from "../OutsideClick";
import Button from "../Button/Button";

import "./Modal.css";
import CloseIcon from "../../assets/icon/CloseIcon";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const [isActive, setIsActive] = OutsideClick(modalRef, isOpen);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" ref={modalRef}>
      <div className="modal">
        <Button className="modal-close" onClick={onClose} Icon={CloseIcon} />
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;