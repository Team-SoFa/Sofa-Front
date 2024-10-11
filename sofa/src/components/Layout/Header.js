import React from "react";
import "./header-layout.css";

const Header = () => {
  return (
    <header className="header">
      <img
        width={"50px"}
        src="example.png"
        alt="logo"
        onClick={() => window.location.reload()}
        className="logo"
      />
      <div className="buttons">
        <button className="header-btn">확장 프로그램 추가하기</button>
        <button className="header-btn">시작하기</button>
      </div>
    </header>
  );
};

export default Header;
