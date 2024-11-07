import React, { useState } from "react";
import "./LinkCard.css";

const LinkCard = ({ bookmark, onDelete, onEdit }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="linkCard"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="link-card-top">
        <img className="image" src={bookmark.img} alt={bookmark.title} />
        {/* hover일 때만 버튼 표시 */}
        {hover && (
          <div className="hover-menus">
            <button className="hover-btn forder-name">FolderName</button>
            <button
              className="hover-btn delete"
              onClick={() => onDelete(bookmark.id)}
            >
              D
            </button>
            <button className="hover-btn alarm">@</button>
            <a
              className="hover-btn link"
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              바로가기
            </a>
          </div>
        )}
      </div>
      <div className="details">
        <p className="name">{bookmark.title}</p>
      </div>
    </div>
  );
};

export default LinkCard;
