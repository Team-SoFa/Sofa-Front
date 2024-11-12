// src/components/Bookmark/BookmarkDetail.js
import React from "react";
import "./BookmarkDetail.css";

const BookmarkDetail = ({ bookmark, onEdit, onDelete }) => {
  if (!bookmark) return <p>북마크를 선택하세요.</p>;

  return (
    <div className="bookmark-detail">
      {/* 상단 이미지 및 제목 */}
      <div className="bookmark-detail-header">
        <img src="example.png" alt={bookmark.title} className="detail-image" />
        <div className="detail-info">
          <h2 className="detail-title">{bookmark.title}</h2>
          <button className="bookmark-btn edit-btn" onClick={onEdit}>수정</button>
          <button className="bookmark-btn delete-btn" onClick={onDelete}>삭제</button>
        </div>
      </div>

      {/* 자동 요약 */}
      <div className="detail-summary">
        <h3>자동 요약</h3>
        <p className="summary-text">AI가 생성한 요약 텍스트가 여기에 표시됩니다. 요약 내용을 넣을 수 있습니다.</p>
      </div>

      {/* 추가 설명 */}
      <div className="detail-description">
        <h3>추가 설명</h3>
        <p className="description-text">추가 설명이 여기에 들어갑니다. 필요에 따라 더 많은 설명을 표시할 수 있습니다.</p>
      </div>

      {/* 태그 섹션 */}
      <div className="detail-tags">
        <h3>태그</h3>
        <div className="tags-container">
          {(bookmark.tags || []).map((tag, index) => (
            <span key={index} className="tag-item">{tag}</span>
          ))}
          <button className="add-tag-btn">+</button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkDetail;
