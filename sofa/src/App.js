import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // 라우터 import
import LandingPage from "./pages/LandingPage";
import SignPage from "./pages/SignPage";
//import OnBoardingPage from "./pages/OnBoardingPage";
import HomePage from "./pages/HomePage";
import RemovedItemsPage from "./pages/RemovedItemsPage";
import { bookmarks as initialBookmarks } from "./components/LinkCard/bookmarks";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
      <Route path="/signpage" element={<SignPage />} />
      <Route path="/removeditemspage" element={<RemovedItemsPage />} />
    </Routes>
  );
}

export default App;
