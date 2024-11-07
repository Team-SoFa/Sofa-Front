// BookmarkForm.js

import React, { useState } from "react";

const LinkCardForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const placeholderImage = "example.png"; // public/assets 경로로 수정

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, url, img: placeholderImage }); // 이미지 URL을 항상 대체 이미지로 설정
    setTitle("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Bookmark title"
          required
        />
      </div>

      <div>
        <label>URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)} // URL 변경 시 이미지 가져오기 없음
          placeholder="Bookmark URL"
          required
        />
      </div>

      <button type="submit">Add Bookmark</button>
    </form>
  );
};

export default LinkCardForm;
