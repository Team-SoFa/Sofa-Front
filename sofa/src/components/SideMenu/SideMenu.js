import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";
import Accordion from "../Accordion/Accordion";
import Dropdown from "../Dropdown/Dropdown";

import HomeLineIcon from "../../assets/icon/HomeLineIcon";
import RemindOnIcon from "../../assets/icon/RemindOnIcon";
import FolderLineIcon from "../../assets/icon/FolderLineIcon";
import MenuMeatBallIcon from "../../assets/icon/MenuMeatBallIcon";
import EditLineIcon from "../../assets/icon/EditLineIcon";
import TrashLineIcon from "../../assets/icon/TrashLineIcon";

const SideMenu = ({ isOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;
  const [folderNames, setFolderNames] = useState({
    // 폴더명 임시값
    folder1: "폴더1",
    folder2: "폴더2",
    folder3: "폴더3",
  });
  const [folderEditOption, setFolderEditOption] = useState("");
  const folderEdit = [
    { Icon: EditLineIcon, content: "폴더 이름 수정" },
    { Icon: TrashLineIcon, content: "폴더 삭제" },
  ].map((item) => ({
    ...item,
  }));

  const handleFolderEditOption = (option) => {
    if (option.content === "폴더 이름 수정") {
      handleFolderNameEdit("folder1"); // 예시로 "폴더 1" 수정, 필요한 폴더에 맞게 변경
    } else if (option.content === "폴더 삭제") {
      handleFolderDelete("folder1"); // 예시로 "폴더 1" 삭제, 필요한 폴더에 맞게 변경
    }
    setFolderEditOption(option.content);
  };
  const handleFolderNameEdit = (folderKey) => {
    const newFolderName = prompt(
      "새 폴더 이름을 입력하세요",
      folderNames[folderKey]
    );
    if (newFolderName) {
      setFolderNames((prevNames) => ({
        ...prevNames,
        [folderKey]: newFolderName,
      }));
    }
  };
  const handleFolderDelete = (folderKey) => {
    const confirmDelete = window.confirm(
      `${folderNames[folderKey]} 폴더를 삭제하시겠습니까?`
    );
    if (confirmDelete) {
      setFolderNames((prevNames) => {
        const updatedNames = { ...prevNames };
        delete updatedNames[folderKey]; // 해당 폴더 삭제
        return updatedNames;
      });
    }
  };

  return (
    <div>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <Link
          to="/homepage"
          className={`item ${isActive("/homepage") ? "active" : ""}`}
        >
          <HomeLineIcon /> <p>홈</p>
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
                    {folderNames.folder1}
                    <Dropdown
                      className="dropdown-folder-edit"
                      Icon={MenuMeatBallIcon}
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
                    <span className="folder-icon">
                      <FolderLineIcon />
                    </span>
                    {folderNames.folder2}
                    <Dropdown
                      className="dropdown-folder-edit"
                      Icon={MenuMeatBallIcon}
                      options={folderEdit}
                      onSelect={handleFolderEditOption}
                    />
                  </Link>
                </div>
                <div className="folder-component">
                  <Link
                    to="/folder3"
                    className={`folder-item ${
                      isActive("/folderpage") ? "active" : ""
                    }`}
                  >
                    <span className="folder-icon">
                      <FolderLineIcon />
                    </span>
                    {folderNames.folder3}
                    <Dropdown
                      className="dropdown-folder-edit"
                      Icon={MenuMeatBallIcon}
                      options={folderEdit}
                      onSelect={handleFolderEditOption}
                    />
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
          <RemindOnIcon /> <p>리마인드함</p>
        </Link>
        <Link
          to="/removeditemspage"
          className={`item ${isActive("/removeditemspage") ? "active" : ""}`}
        >
          <TrashLineIcon /> <p>휴지통</p>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
