import React, { useState, useEffect } from "react";
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

// Services
import { tempLogin, googleOAuthRedirectUriGet2, googleOAuthLoginGet } from "./services/oAuthService"; // Google 로그인 서비스 호출
import { useDispatch } from "react-redux";  // Redux 관련 hooks
import { setTokens } from "./redux/actions/authActions"; // 액션 임포트

function App() {
  const dispatch = useDispatch(); // Redux 디스패치 가져오기

  useEffect(() => {
    const handleGoogleLogin = async () => {
      try {
        const data = {
          email: "mg0454@gmail.com",
          name: "성명근",
        };

        console.log("handleGoogleLogin:", data);

        const response = await tempLogin(data);

        console.log("Google Login Response:", response);

        if (response && response.token.accessToken && response.token.refreshToken) {
          console.log(response.token.accessToken, response.token.refreshToken);
          dispatch(setTokens(response.token.accessToken, response.token.refreshToken));
          console.log("로그인 성공!");
        } else {
          console.log("로그인 응답에 문제가 있습니다.");
        }
      } catch (err) {
        console.log("Login Error:", err);
      } finally {
        console.log("로딩 종료");
      }
    };

    handleGoogleLogin();
  }, [dispatch]); // 의존성 배열에 dispatch 추가
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
