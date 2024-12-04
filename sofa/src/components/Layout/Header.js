import React from "react";
import { Link } from "react-router-dom";
import "./header-layout.css";

const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
        src="example.png"
        alt="logo"
        onClick={() => window.location.reload()}
      />
      <div className="buttons">
        <button className="header-btn">확장 프로그램 추가하기</button>
        <Link to="/login">
          <button className="header-btn">시작하기</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
