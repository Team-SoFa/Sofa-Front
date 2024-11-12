// src/components/Bookmark/BookmarkDetail.js

import React from "react";
import "./BookmarkDetail.css";

const BookmarkDetail = ({ bookmark }) => {
  return (
    <div className="bookmark-detail">
      <h2>{bookmark.title}</h2>
      <p><strong>URL:</strong> <a href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.url}</a></p>
      <p><strong>Description:</strong> This is a detailed description of the bookmark.</p>
    </div>
  );
};

export default BookmarkDetail;
