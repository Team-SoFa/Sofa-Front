import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // 라우터 import
import HomePage from "./pages/HomePage";
import SignPage from "./pages/SignPage";
import OnBoardingPage from "./pages/OnBoardingPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<OnBoardingPage />} /> */}
      {/* <Route path="/" element={<SignPage />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/userpage" element={<UserPage />} />
      <Route path="/signpage" element={<SignPage />} />

    </Routes>
  );
}

export default App;
