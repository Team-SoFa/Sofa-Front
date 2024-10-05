import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookmarkForm from "./components/BookmarkForm";
import BookmarkList from "./components/BookmarkList";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  // 북마크 상태 관리
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: "Google", url: "htttps://google.com" },
    { id: 2, title: "Github", url: "https://github.com" },
  ]);

  // 북마크 추가 함수
  const addBookmark = (newBookmark) => {
    // 새로운 북마크에 고유 ID 추가
    const newId = bookmarks.length ? bookmarks[bookmarks.length - 1].id + 1 : 1;
    const bookmarkWithId = { id: newId, ...newBookmark };
    // 기존 북마크에 추가
    setBookmarks([...bookmarks, bookmarkWithId]);
  };

  // 북마크 삭제 함수
  const deleteBookmark = (id) => {
    const filteredBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(filteredBookmarks);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/bookmarks">Bookmarks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/bookmarks"
            element={
              <div>
                <h1>Bookmark</h1>
                <BookmarkForm onSubmit={addBookmark} />
                <BookmarkList bookmarks={bookmarks} onDelete={deleteBookmark} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
