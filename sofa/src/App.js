import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // 라우터 import
import OnBoadringPage from "./pages/OnBoardingPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnBoadringPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
