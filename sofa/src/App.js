import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // 라우터 import
// Pages
import LandingPage from "./pages/LandingPage";
import SignPage from "./pages/SignPage";
import HomePage from "./pages/HomePage";
import FolderPage from "./pages/FolderPage";
import RemindPage from "./pages/RemindPage";
import RemovedItemsPage from "./pages/RemovedItemsPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Datas
import { bookmarks as initialBookmarks } from "./components/LinkCard/bookmarks";

// Styls
import Typography from "./styles/Typography/Typography";
import "./App.css";
import "./styles/color.css";

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
      <Route path="/" element={<LandingPage />} />
      <Route path="/signpage" element={<SignPage />} />
      <Route path="/termspage" element={<TermsPage />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />

      <Route
        path="/homepage"
        element={
          <HomePage
            bookmarks={bookmarks}
            onAddBookmark={handleAddBookmark}
            onDeleteBookmark={handleDeleteBookmark}
          />
        }
      />

      <Route
        path="/folderpage"
        element={
          <FolderPage
            bookmarks={bookmarks}
            onAddBookmark={handleAddBookmark}
            onDeleteBookmark={handleDeleteBookmark}
          />
        }
      />
      <Route
        path="/remindpage"
        element={
          <RemindPage
            bookmarks={bookmarks}
            onAddBookmark={handleAddBookmark}
            onDeleteBookmark={handleDeleteBookmark}
          />
        }
      />
      <Route
        path="/removeditemspage"
        element={
          <RemovedItemsPage
            bookmarks={bookmarks}
            onAddBookmark={handleAddBookmark}
            onDeleteBookmark={handleDeleteBookmark}
          />
        }
      />
    </Routes>
  );
}

export default App;
