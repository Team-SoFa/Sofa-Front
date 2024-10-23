import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // 라우터 import
import SignPage from "./pages/SignPage";
import OnBoardingPage from "./pages/OnBoardingPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<OnBoardingPage />} /> */}
      <Route path="/" element={<SignPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
