import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header-layout.css";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      {location.pathname === "/userpage" && (
        <>
          <Link to="/userpage">
            <img
              className="menu"
              src="menu-icon.png"
              width={"25px"}
              alt="menu"
              onClick={() => window.location.reload()}
            />
          </Link>
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
            <Link to="/login">
              <button className="header-btn">시작하기</button>
            </Link>
            <Link to="/userpage">
              <button className="header-btn">[임시]유저페이지</button>
            </Link>
            <Link to="/signpage">
              <button className="header-btn">[임시]SignPage</button>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
