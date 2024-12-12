import React, { useState } from "react";
import "./LinkCard.css";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";

import TrashLineIcon from "../../assets/icon/TrashLineIcon";
import RemindOffIcon from "../../assets/icon/RemindOffIcon";
import DownIcon from "../../assets/icon/DownIcon";
import LinkIcon from "../../assets/icon/LinkIcon";
import MenuMeatBallIcon from "../../assets/icon/MenuMeatBallIcon";
import RestoreIcon from "../../assets/icon/RestoreIcon";
import TrashForever from "../../assets/icon/TrashForeverIcon";

const LinkCard = ({ className, bookmark, onDelete, onEdit, onClick }) => {
  const [hover, setHover] = useState(false);
  const [folderOption, setFolderOption] = useState("");
  const [LinkCardEditOption, setLinkCardEditOption] = useState("");
  const linkCardEdit = [
    { Icon: RestoreIcon, content: "복원" },
    { Icon: TrashForever, content: "영구 삭제" },
  ].map((item) => ({
    ...item,
  }));

  console.log("bookmarkUrl", bookmark.imageUrl);

  const folderOpt = ["Documents", "Pictures", "Music", "Videos"].map(
    (item) => ({
      label: item,
      content: item,
    })
  );
  const handleLinkCardOption = (option) => {
    if (option.content === "복원") {
      handleLinkCardRestore("folder1"); // 예시로 "폴더 1" 수정, 필요한 폴더에 맞게 변경
    } else if (option.content === "영구 삭제") {
      handleLinkCardDelete("folder1"); // 예시로 "폴더 1" 삭제, 필요한 폴더에 맞게 변경
    }
  };

  const handleLinkCardRestore = (folderKey) => {
    //링크카드 복원 코드
  };

  const handleLinkCardDelete = (folderKey) => {
    const confirmDelete = window.confirm("링크카드를 영구 삭제하시겠습니까?");
    //링크카드 영구 삭제 코드
  };

  const handleFolderOption = (option) => {
    setFolderOption(option.content);
  };
  const handleDeletedClick = (e) => {
    e.stopPropagation(); // onClick이 상위 요소에 전달되지 않도록
    onDelete(bookmark.id);
  };

  return (
    <div
      className={`linkCard ${className}`} // className을 props로 받아서 추가
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div className="link-card-top">
        <img
          className="image"
          src={bookmark.imageUrl}
          alt={bookmark.title}
          onError={(e) => {
            if (e.target.src !== `${process.env.PUBLIC_URL}/example.png`) {
              e.target.src = `${process.env.PUBLIC_URL}/example.png`; // 기본 이미지로 대체
            }
          }}
        />
        {hover && // hover 상태에서만 메뉴 표시
          (className === "RemovedItemsPage" ? (
            // RemovedItemsPage
            <div className="RemovedItemsPage">
              <Dropdown
                className={`linkcard folder-name ${className}`}
                options={linkCardEdit}
                Icon={MenuMeatBallIcon}
                onSelect={handleLinkCardOption}
              />
              <Button
                className="linkcard link"
                Icon={LinkIcon}
                label="링크 바로가기"
                onClick={() =>
                  window.open(bookmark.url, "_blank", "noopener noreferrer")
                }
              />
            </div>
          ) : (
            // 일반 hover 시 메뉴 표시
            <div className="hover-menus">
              <Dropdown
                className="linkcard folder-name"
                options={folderOpt}
                Icon={DownIcon}
                label="폴더이름"
                onSelect={handleFolderOption}
              />
              <Button className="linkcard alarm" Icon={RemindOffIcon} />
              <Button
                className="linkcard delete"
                Icon={TrashLineIcon}
                onClick={handleDeletedClick}
              />
              <Button
                className="linkcard link"
                Icon={LinkIcon}
                label="링크 바로가기"
                onClick={() =>
                  window.open(bookmark.url, "_blank", "noopener noreferrer")
                }
              />
            </div>
          ))}
      </div>

      <p className="details">{bookmark.title}</p>
    </div>
  );
};

export default LinkCard;
