import React from "react";
//import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo">북마크 아카이빙 웹서비스</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>당신의 북마크를 손쉽게 수집하라!</h2>
        <p>저장하고 관리하세요</p>
        <a href="/bookmarks" className="cta-btn">
          수집하다
        </a>
      </section>

      <section className="features" id="features">
        <h3>왜 우리를 만나러 왔나요?</h3>
        <div className="feature-list">
          <div className="feature">
            <h4>저장하라 당신의 북마크들</h4>
            <p>쉽게 모으고 정리하라</p>
          </div>
          <div className="feature">
            <h4>검색하고 필터링하라</h4>
            <p>당신의 픽을 태그와 함께 빠르게 검색하세요</p>
          </div>
          <div className="feature">
            <h4>접근하라</h4>
            <p>구글 익스텐션을 통해 편하고 빠르게 접속하시오</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>@2024 북마크짱. 만나서 반가운</p>
      </footer>
    </div>
  );
}

export default HomePage;
