// BookmarkItem.js

import React from "react";
import "./BookmarkItem.css";

// bookmark: 북마크 데이터(id, title, url) 저장하는 객체
// onDelete: 북마크의 id를 인자로 받아 삭제 처리하는 콜백 함수

const BookmarkItem = ({ bookmark, onDelete }) => {
  const placeholderImage = "example.png";

  return (
    <div className="bookmark-card">
      <img
        className="bookmark-img"
        src={placeholderImage} // 항상 대체 이미지 사용
        alt={bookmark.title}
      />
      <div className="bookmark-details">
        <a
          className="bookmark-link"
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {bookmark.url}
        </a>
        <p className="bookmark-name">{bookmark.title}</p>
        {/* <button onClick={() => onDelete(bookmark.id)} className="bookmark-del">
          Del
        </button> */}
      </div>
    </div>
  );
};

export default BookmarkItem;
