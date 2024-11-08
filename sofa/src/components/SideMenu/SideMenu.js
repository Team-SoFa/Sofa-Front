import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";
import Accordion from "../Accordion/Accordion";

const SideMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <Link to="/userpage" className="home">
          <img className="icon" src="example.png" alt="icon" />
          <p>홈</p>
        </Link>
        <div className="folder">
          <img className="icon" src="example.png" alt="icon" />
          <p>폴더</p>
        </div>
        <Link to="/removeditemspage" className="removeditems">
          <img className="icon" src="example.png" alt="icon" />
          <p>휴지통</p>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
