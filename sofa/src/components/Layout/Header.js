import React from "react";
import { Link, useLocation } from "react-router-dom";
import TextField from "../Textfield/Textfield";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import "./header-layout.css";

const Header = ({ type, toggleMenu }) => {
  const location = useLocation();
  const folderOptions = ["Documents", "Pictures", "Music", "Videos"];
  const tagsOptions = ["Documents", "Pictures", "Music", "태그어쩌구1"];

  const headerStyle =
    type === "ONBOARDING"
      ? { backgroundColor: "#F1F1F1", paddingTop: "1rem" }
      : {};

  return (
    <header className="header" style={headerStyle}>
      {location.pathname === "/userpage" && (
        <>
          <img
            className="menu"
            src="menu-icon.png"
            width={"25px"}
            alt="menu"
            onClick={toggleMenu}
          />
          <div className="searchers">
            <Dropdown options={folderOptions} type={"folder"} />
            <Dropdown options={tagsOptions} type={"folder"} />

            <TextField
              className="text_field"
              placeholder="검색어를 입력하세요."
            />
            <Button className={"btn"} label="검색" />
          </div>
          <div className="user_info">
            <Dropdown options={folderOptions} type={"folder"} />
            <Button label="계정정보" />
          </div>
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
