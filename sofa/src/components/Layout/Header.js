import React from "react";
import { Link, useLocation } from "react-router-dom";
import TextField from "../Textfield/Textfield";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import "./HeaderStyle.css";

const Header = ({ type, toggleMenu }) => {
  const location = useLocation();
  const alarmOptions = [
    "3일 후 휴지통에서 n개의 링크들이 영원히 빛을 잃게 됩니다.",
    "또 어떤 알람이 있을까요",
    "새로운 업데이트가 있습니다.",
  ];
  const folderOpt = ["폴더1", "폴더2", "폴더3"];
  const tagsOpt = ["Documents", "Pictures", "Music", "태그어쩌구1"];

  const headerStyle =
    type === "ONBOARDING"
      ? { backgroundColor: "#F1F1F1", paddingTop: "1rem" }
      : {};

  return (
    <header className="header" style={headerStyle}>
      {/* ========== LINK CARD PAGES ========== */}
      {location.pathname === "/homepage" && (
        <>
          <Button className="menu" onClick={toggleMenu} label="🔲" />
          <div className="searchers">
            <Dropdown className="folder" options={folderOpt} label="폴더선택" />
            <Dropdown className="tag" options={tagsOpt} label="태그선택" />

            <TextField
              className="text_field"
              placeholder="검색어를 입력하세요."
            />
            <Button label="검색" />
          </div>
          <div className="user_info">
            <Dropdown className="alarm" options={alarmOptions} label="알림" />
            <Button label="계정정보" />
          </div>
        </>
      )}

      {/* ========== Landing PAGE ========== */}
      {location.pathname !== "/homepage" && (
        <>
          <img
            className="logo"
            src="example.png"
            alt="logo"
            onClick={() => window.location.reload()}
          />
          <div className="buttons">
            <Button label="확장 프로그램 추가하기" />
            <Link to="/homepage">
              <Button label="[임시]홈P" />
            </Link>
            <Link to="/signpage">
              <Button label="[임시]SignP" />
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
