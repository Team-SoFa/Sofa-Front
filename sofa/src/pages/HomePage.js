// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the homepage of the application.</p>

      {/* Link를 사용해 로그인 페이지로 이동 */}
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
};

export default HomePage;
