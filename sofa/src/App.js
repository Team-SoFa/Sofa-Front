import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // 라우터 import
import HomePage from "./pages/HomePage";
import SignPage from "./pages/SignPage";
//import OnBoardingPage from "./pages/OnBoardingPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import RemovedItemsPage from "./pages/RemovedItemsPage";
import { bookmarks as initialBookmarks } from "./components/LinkCard/bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState(initialBookmarks);

  const handleAddBookmark = (newBookmark) => {
    setBookmarks((prevBookmarks) => [
      ...prevBookmarks,
      { id: Date.now(), ...newBookmark },
    ]);
  };
  const handleDeleteBookmark = (id) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((b) => b.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/userpage"
        element={
          <UserPage
            bookmarks={bookmarks}
            onAddBookmark={handleAddBookmark}
            onDeleteBookmark={handleDeleteBookmark}
          />
        }
      />
      <Route path="/signpage" element={<SignPage />} />
      <Route path="/removeditemspage" element={<RemovedItemsPage />} />
    </Routes>
  );
}

export default App;
