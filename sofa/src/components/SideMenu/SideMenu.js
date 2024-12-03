import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";
import Accordion from "../Accordion/Accordion";
import Dropdown from "../Dropdown/Dropdown";

import HomeLineIcon from "../../assets/icon/HomeLineIcon";
import RemindOnIcon from "../../assets/icon/RemindOnIcon";
import FolderLineIcon from "../../assets/icon/FolderLineIcon";

const SideMenu = ({ isOpen }) => {
  const [folderEditOption, setFolderEditOption] = useState("태그선택");

  const folderEdit = [
    { img: "example.png", content: "폴더 이름 수정" },
    { img: "example.png", content: "폴더 삭제" },
  ].map((item) => ({
    ...item,
  }));

  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  const handleFolderEditOption = (option) => {
    setFolderEditOption(option.content);
  };

  return (
    <div>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <Link
          to="/homepage"
          className={`item ${isActive("/homepage") ? "active" : ""}`}
        >
          <HomeLineIcon />
          <p>홈</p>
        </Link>
        <div className="menu">
          <Accordion
            type="SIDE_MENU"
            title="폴더"
            content={
              <>
                <div className="folder-component">
                  <Link
                    to="/folderpage"
                    className={`folder-item ${
                      isActive("/folderpage") ? "active" : ""
                    }`}
                  >
                    <span className="folder-icon">
                      <FolderLineIcon />
                    </span>
                    폴더 1
                    <Dropdown
                      className="dropdown-folder-edit"
                      Icon={FolderLineIcon}
                      options={folderEdit}
                      onSelect={handleFolderEditOption}
                    />
                  </Link>
                </div>
                <div className="folder-component">
                  <Link
                    to="/folder2"
                    className={`folder-item ${
                      isActive("/folderpage") ? "active" : ""
                    }`}
                  >
                    ---
                  </Link>
                </div>
                <div className="folder-component">
                  <Link
                    to="/folder3"
                    className={`folder-item ${
                      isActive("/folderpage") ? "active" : ""
                    }`}
                  >
                    ---
                  </Link>
                </div>
              </>
            }
          />
        </div>
        <Link
          to="/remindpage"
          className={`item ${isActive("/remindpage") ? "active" : ""}`}
        >
          <RemindOnIcon />
          <p>리마인드함</p>
        </Link>
        <Link
          to="/removeditemspage"
          className={`item ${isActive("/removeditemspage") ? "active" : ""}`}
        >
          <HomeLineIcon />
          <p>휴지통</p>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
