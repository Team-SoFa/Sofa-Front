import React, { useState } from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <img
          width={"100px"}
          src="example.png"
          alt="logo"
          onClick={() => window.location.reload()}
          className="logo"
        />
        <button className="extension-btn">확장 프로그램 추가하기</button>
        <button className="start-btn">시작하기</button>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default HomePage;
