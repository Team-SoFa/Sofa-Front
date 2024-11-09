import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header-layout.css";
import TextField from "../Textfield/Textfield";

const Header = ({ toggleMenu }) => {
  const location = useLocation();
  return (
    <header className="header">
      {location.pathname === "/userpage" && (
        <>
          <img
            className="menu"
            src="menu-icon.png"
            width={"25px"}
            alt="menu"
            onClick={toggleMenu}
          />
          <TextField className="text_field" />
        </>
      )}
      {location.pathname !== "/userpage" && (
        <>
          <img
            className="logo"
            src="example.png"
            alt="logo"
            onClick={() => window.location.reload()}
          />
          <div className="buttons">
            <button className="header-btn">확장 프로그램 추가하기</button>
            <Link to="/userpage">
              <button className="header-btn">[임시]유저P</button>
            </Link>
            <Link to="/signpage">
              <button className="header-btn">[임시]SignP</button>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
