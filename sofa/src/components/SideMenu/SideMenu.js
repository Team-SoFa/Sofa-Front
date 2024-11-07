import React from "react";
import "./SideMenu.css";
import Accordion from "../Accordion/Accordion";

const SideMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="home">
          <img className="icon" src="example.png" alt="icon" />
          <p>홈</p>
        </div>
        <div className="folder">
          <img className="icon" src="example.png" alt="icon" />
          <p>폴더</p>
        </div>
        <div className="bin">
          <img className="icon" src="example.png" alt="icon" />
          <p>휴지통</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
