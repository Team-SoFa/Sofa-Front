import React, { useState } from "react";
import "./LinkCard.css";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";

const LinkCard = ({ bookmark, onDelete, onEdit, onClick }) => {
  const [hover, setHover] = useState(false);
  const folderOpt = ["Document", "music", "front-end", "어쩌구폴더"].map(
    (item) => ({
      content: item,
    })
  );

  return (
    <div
      className="linkCard"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div className="link-card-top">
        <img className="image" src={bookmark.img} alt={bookmark.title} />
        {hover && (
          <div className="hover-menus">
            <Dropdown
              className="linkcard folder-name"
              options={folderOpt}
              label="폴더"
            />
            <Button
              className="linkcard delete"
              label="D"
              onClick={() => onDelete(bookmark.id)}
            />
            <Button className="linkcard alarm" label="@" />
            <Button
              className="linkcard link"
              label="바로가기"
              onClick={() =>
                window.open(bookmark.url, "_blank", "noopener noreferrer")
              }
            />
          </div>
        )}
      </div>
      <p className="details">{bookmark.title}</p>
    </div>
  );
};

export default LinkCard;
