import React, { useState, useEffect } from "react";
import Spinner from "./components/Spinner"; // 스피너 컴포넌트 import
import { Routes, Route } from 'react-router-dom'; // 라우터 import
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
