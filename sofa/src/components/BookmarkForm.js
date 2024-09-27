import React, { useState } from "react";
//import TextField from './TextField';

const BookmarkForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, url });
    setTitle("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <TextField
                label="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Bookmark title"
                required
                />
                <TextField
                label="URL"
                value={url}
                onChange={(e)=>setUrl(e.target.value)}
                placeholder="Bookmark URL"
                required
                /> */}

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
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Bookmark URL"
          required
        />
      </div>
      <button type="submit">Add Bookmark</button>
    </form>
  );
};

export default BookmarkForm;
