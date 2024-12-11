import React, { useState, useEffect } from "react";
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

import {
  folderGet,
  folderPost,
  folderDelete,
  folderPut,
} from "../../services/folderService";

const SideMenu = ({ isOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;
  const [folderNames, setFolderNames] = useState([]);
  const [folderEditOption, setFolderEditOption] = useState("");
  const folderEdit = [
    { Icon: EditLineIcon, content: "폴더 이름 수정" },
    { Icon: TrashLineIcon, content: "폴더 삭제" },
  ].map((item) => ({
    ...item,
  }));

  const [isFetching, setIsFetching] = useState(false); // 로딩 상태 관리

  const handleAccordionToggle = async (isOpen) => {
    if (isOpen && folderNames.length === 0) {
      // 폴더 데이터가 없는 경우만 호출
      try {
        setIsFetching(true);

        const foldersResponse = await folderGet();
        if (foldersResponse?.folderList) {
          const folderData = foldersResponse.folderList.map((folder) => ({
            id: folder.id,
            name: folder.name,
          }));
          setFolderNames(folderData);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsFetching(false);
      }
    }
  };

  const handleFolderEditOption = (option) => {
    if (option.content === "폴더 이름 수정") {
      handleFolderNameEdit(option.id); // 예시로 "폴더 1" 수정, 필요한 폴더에 맞게 변경
    } else if (option.content === "폴더 삭제") {
      handleFolderDelete(option.id); // 예시로 "폴더 1" 삭제, 필요한 폴더에 맞게 변경
    }
    setFolderEditOption(option.content);
  };
  // 폴더명 수정
  const handleFolderNameEdit = (folderId) => {
    const folder = folderNames.find((folder) => folder.id === folderId);
    const newFolderName = prompt("새 폴더 이름을 입력하세요", folder?.name);

    if (newFolderName) {
      setFolderNames((prevNames) =>
        prevNames.map((folder) =>
          folder.id === folderId ? { ...folder, name: newFolderName } : folder
        )
      );
    }
  };
  //폴더 삭제
  const handleFolderDelete = (folderId) => {
    const folder = folderNames.find((folder) => folder.id === folderId);
    const confirmDelete = window.confirm(
      `${folder?.name} 폴더를 삭제하시겠습니까?`
    );

    if (confirmDelete) {
      setFolderNames((prevNames) =>
        prevNames.filter((folder) => folder.id !== folderId)
      );
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
            content={folderNames.map((folder) => (
              <div className="folder-component" key={folder.id}>
                <Link
                  to={`/folderpage/${folder.name}`}
                  state={{ id: folder.id }}
                  className={`folder-item ${
                    isActive(`/folder/${folder.name}`) ? "active" : ""
                  }`}
                >
                  <span className="folder-icon">
                    <FolderLineIcon />
                  </span>
                  {folder.name}
                  <Dropdown
                    className="dropdown-folder-edit"
                    Icon={MenuMeatBallIcon}
                    options={folderEdit}
                    onSelect={() => handleFolderEditOption(folder)}
                  />
                </Link>
              </div>
            ))}
            onToggle={handleAccordionToggle} // Accordion 열릴 때 API 호출
          />
          {/* <Accordion
            type="SIDE_MENU"
            title="폴더"
            content={
              <>
                <div className="folder-component">
                  <Link
                    to="/folderpage/folder1"
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
          /> */}
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
