import React, { useState } from "react";
import "../styles/header-layout.css";
import "../styles/main-layout.css";
import "../styles/footer-layout.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <img
          width={"50px"}
          src="example.png"
          alt="logo"
          onClick={() => window.location.reload()}
          className="logo"
        />
        <div className="buttons">
          <button className="header-btn">확장 프로그램 추가하기</button>
          <button className="header-btn">시작하기</button>
        </div>
      </header>

      <main className="main-style">
        <section className="slogan-section  main-style">
          <h1 className="slogan">당신의 시간을 절약하는 최고의 서비스</h1>
          <p>확장 프로그램을 추가하고 더 많은 기능을 경험하세요</p>
          <a
            className="button"
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noreferrer"
          >
            Chrome Web Store 바로가기
          </a>
        </section>
        <section className="main-feature-section  main-style">
          <img className="service-icon" src="example.png" alt="service icon" />
          <h2 className="title">주요 서비스 기능, 장점 소개</h2>
          <div className="main-contents  main-style">
            <img src="example.png" width={"200px"} alt="service icon" />
            <img src="example.png" width={"200px"} alt="service icon" />
            <img src="example.png" width={"200px"} alt="service icon" />
          </div>
        </section>

        <section className="side-feature-section  main-style">
          <img className="service-icon" src="example.png" alt="service icon" />
          <h2 className="title">기타 추가 서비스 소개</h2>
          <div className="grid">
            <div className="card">
              <img src="example.png" alt="feature" />
              <div className="card-contents">
                <p>당신만의 북마크 폴더를 공유하고 팀원들과 협업하세요</p>
              </div>
            </div>
            <div className="card">
              <img src="example.png" alt="feature" />
              <div className="card-contents">
                <p>폴더와 태그별로 북마크를 관리하세요</p>
              </div>
            </div>
            <div className="card">
              <img src="example.png" alt="feature" />
              <div className="card-contents">
                <p>
                  헝헝힛더클락션우우아우우우아우우우아우우아우힛더클랔션좀미친소리같지만난네게반했어어우워
                  어어우워
                </p>
              </div>
            </div>
            <div className="card">
              <img src="example.png" alt="feature" />
              <div className="card-contents">
                <p>
                  슈가콭따위 벗어던진 날 너가 뭐라던지 저슽 뭅 내 맘대로 날 위한
                  춤을 추지 돈 슈갈콭미베이베
                </p>
              </div>
            </div>
            <div className="card">
              <img src="example.png" alt="feature" />
              <div className="card-contents">
                <p>description for feature5</p>
              </div>
            </div>
            <div className="card">
              <img src="example.png" alt="feature" />
              <div className="card-contents">
                <p>description for feature6</p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section  main-style">
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
      <footer className="footer">
        <h2>서비스 메인 슬로건 코멘트</h2>
        <button className="button">시작하기</button>
        <div className="footer-contents">
          <div className="left-contents">
            <p>copyrights blahblah</p>
            <p>기타 내용1</p>
            <p>기타 내용2</p>
          </div>
          <div className="right-contents">
            <p>이용약관</p>
            <p>개인정보처리방침</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
