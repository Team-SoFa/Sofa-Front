// BookmarkList.js

import React from "react";
import LinkCard from "./LinkCard.js";
import "./ShowLinkCard.css";

//bookmarks : 북마크 데이터 배열(id, title, url 포함)
//onDelete : 북마크 삭제 함수
//북마크 목록 길이가 0보다 길면 렌더링
const ShowLinkCard = ({ bookmarks, onDelete, onEdit, sortingOption, onLinkCardClick }) => {
  //Sorting
  const sortBookmarks = (bookmarks, sortingOption) => {
    if (sortingOption === "최근 저장") {
      return bookmarks.sort((a, b) => b.id - a.id);
    } else if (sortingOption === "오래된 저장") {
      return bookmarks.sort((a, b) => a.id - b.id);
    } else if (sortingOption === "오름차순") {
      return bookmarks.sort((a, b) => a.title.localeCompare(b.title)); // 제목 알파벳 오름차순 정렬
    } else if (sortingOption === "내림차순") {
      return bookmarks.sort((a, b) => b.title.localeCompare(a.title)); // 제목 알파벳 내림차순 정렬
    }
    return bookmarks;
  };

  const sortedBookmarks = sortingOption
    ? sortBookmarks([...bookmarks], sortingOption)
    : bookmarks;

  return (
    <div className="bookmark-grid">
      {sortedBookmarks.length > 0 ? (
        sortedBookmarks.map((bookmark) => (
          <LinkCard
            key={bookmark.id} //리스트에서 고유 식별자 사용
            bookmark={bookmark} //각 북마크 데이터를 BookmarkItem에 전달
            onDelete={onDelete} //삭제 기능을 BookmarkItem에 전달
            onEdit={onEdit}
            onClick={() => {
              console.log("Card clicked:", bookmark)
              onLinkCardClick(bookmark) // 안전하게 호출
            }}
          />
        ))
      ) : (
        <p>...</p>
      )}
    </div>
  );
};

export default ShowLinkCard;
