import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // 라우터 import
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import OnBoardingPage from "./pages/OnBoardingPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<OnBoardingPage />} /> */}
      <Route path="/" element={<SignInPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
