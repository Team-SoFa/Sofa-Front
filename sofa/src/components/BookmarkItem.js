// BookmarkItem.js

import React from "react";
import "../styles/BookmarkItem.css";

//boomark : 북마크 데이터(id, title, url) 저장하는 객체
//onDelete : 북마크의 id를 인자로 받아 삭제처리하는 콜백 함수

//target="_black" : 새 탭에서 링크 오픈
//noopener noreferrer : 외부 링크를 새 탭에서 열 때 참조 링크 정보 전달x(보안상 이유)
//bookmark.title : 북마크 제목을 화면에 표시(클릭하면 해당 URL로 이동)
const BookmarkItem = ({ bookmark, onDelete }) => {
  return (
    <div className="bookmark-card">
      <a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bookmark-link"
      >
        {bookmark.title}
      </a>
      <button onClick={() => onDelete(bookmark.id)} className="bookmark-del">
        Delete
      </button>
    </div>
  );
};

export default BookmarkItem;
