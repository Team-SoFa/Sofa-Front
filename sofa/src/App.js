import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import HomePage from "./pages/HomePage";
=======
import Spinner from "./components/Spinner"; // 스피너 컴포넌트 import
import { Routes, Route } from 'react-router-dom'; // 라우터 import
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
>>>>>>> 9c86c220cfedd289dc3039cecd119c24224fa81c

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
