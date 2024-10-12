import React, { useState } from "react";
import Header from "../components/Layout/Header";
import TextField from "../components/textfield/textfield";
import BookmarkList from "../components/Bookmark/BookmarkList";
import BookmarkForm from "../components/Bookmark/BookmarkForm";

const UserPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, { ...newBookmark, id: Date.now() }]);
  };

  return (
    <div className="userpage">
      <Header />
      <TextField />
      <h1>UserPage입니다</h1>
      <BookmarkForm onSubmit={handleAddBookmark} />
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
};

export default UserPage;
