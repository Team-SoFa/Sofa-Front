import React, { useState } from "react";

const HomePage = () => {
  const features = [
    { title: "feature1", description: "description blah blah" },
    { title: "feature2", description: "description blah blah" },
    { title: "feature3", description: "description blah blah" },
    { title: "feature4", description: "description blah blah" },
    { title: "feature5", description: "description blah blah" },
    { title: "feature6", description: "description blah blah" },
  ];
  return (
    <div className="homepage">
      <header className="header" style={{ backgroundColor: "lightblue" }}>
        <img
          width={"50px"}
          src="example.png"
          alt="logo"
          onClick={() => window.location.reload()}
          className="logo"
        />
        <button className="extension-btn">확장 프로그램 추가하기</button>
        <button className="start-btn">시작하기</button>
      </header>

      <main className="main-content">
        <section className="slogan-section">
          <h1 className="slogan">당신의 시간을 절약하는 최고의 서비스</h1>
          <p>확장 프로그램을 추가하고 더 많은 기능을 경험하세요</p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noreferrer"
          >
            Chrome Web Store 바로가기
          </a>
        </section>
        <section className="feature-section">
          <img
            src="example.png"
            width={"100px"}
            alt="service icon"
            className="service-icon"
          />
          <h2 className="title">주요 서비스 기능, 장점 소개</h2>
          <div className="contents">
            <img
              src="example.png"
              width={"200px"}
              alt="service icon"
              className="service-icon"
            />
            <img
              src="example.png"
              width={"200px"}
              alt="service icon"
              className="service-icon"
            />
            <img
              src="example.png"
              width={"200px"}
              alt="service icon"
              className="service-icon"
            />
          </div>
        </section>

        <section className="side-feature-section">
          <img
            src="example.png"
            width={"100px"}
            alt="service icon"
            className="service-icon"
          />
          <h2 className="title">기타 추가 서비스 소개</h2>
          <div className="grid">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <img
            src="example.png"
            width={"100px"}
            alt="service icon"
            className="service-icon"
          />
          <h2 className="title">자주 묻는 질문 / FAQ</h2>
          <div className="contents">
            <p>question 1</p>
            <p>question 2</p>
            <p>question 3</p>
          </div>
        </section>
      </main>
      <footer
        className="footer"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <h2>서비스 메인 슬로건 코멘트</h2>
        <button className="start-btn">시작하기</button>
        <div className="footer-contents">
          <p>copyrights blahblah</p>
          <p>기타 내용1</p>
          <p>기타 내용2</p>
        </div>
        <div className="footer-contents">
          <p>이용약관</p>
          <p>개인정보처리방침</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
