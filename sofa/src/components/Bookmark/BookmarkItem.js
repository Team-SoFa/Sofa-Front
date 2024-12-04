// BookmarkItem.js

import React from "react";
import "./BookmarkItem.css";

// bookmark: 북마크 데이터(id, title, url) 저장하는 객체
// onDelete: 북마크의 id를 인자로 받아 삭제 처리하는 콜백 함수

const BookmarkItem = ({ bookmark, onDelete }) => {
  const placeholderImage = "example.png"; // public/assets 경로로 수정

  return (
    <div className="bookmark-card">
      <div className="bookmark-img-container">
        <img
          src={placeholderImage} // 항상 대체 이미지 사용
          alt={bookmark.title}
          className="bookmark-img"
        />
      </div>
      <div className="bookmark-details">
        <a
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bookmark-link"
        >
          {bookmark.title}
        </a>
        {/* <button onClick={() => onDelete(bookmark.id)} className="bookmark-del">
          Del
        </button> */}
      </div>
    </div>
  );
};

export default BookmarkItem;
