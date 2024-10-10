// BookmarkList.js

import React from "react";
import BookmarkItem from "./BookmarkItem.js";
import "./BookmarkList.css";

//bookmarks : 북마크 데이터 배열(id, title, url 포함)
//onDelete : 북마크 삭제 함수
//북마크 목록 길이가 0보다 길면 렌더링
const BookmarkList = ({ bookmarks, onDelete }) => {
  return (
    <div className="bookmark-grid">
      {bookmarks.length > 0 ? (
        bookmarks.map((bookmark) => (
          <BookmarkItem
            key={bookmark.id} //리스트에서 고유 식별자 사용
            bookmark={bookmark} //각 북마크 데이터를 BookmarkItem에 전달
            onDelete={onDelete} //삭제 기능을 BookmarkItem에 전달
          />
        ))
      ) : (
        <p>텅~</p>
      )}
    </div>
  );
};

export default BookmarkList;
