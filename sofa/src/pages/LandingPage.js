import React, { useState } from "react";
import Header from "../components/Layout/Header.js";
import Footer from "../components/Layout/Footer.js";

import "./LandingPage.css";

const LandingPage = () => {
  const faqData = [
    {
      question: "링카이빙만의 차별점은 무엇인가요?",
      answer: "링카이빙은 생성형 AI를 활용해 여러분들의 링크 아카이빙 과정을 효율적으로 도와줍니다. 링카이빙을 사용하면 여러 페이지나 폴더를 탐색하지 않고도 중요한 정보나 알림을 손쉽게 탐색할 수 있어 시간을 효율적으로 활용하고 생산성을 유지할 수 있습니다."
    },
    {
      question: "링카이빙의 서비스는 무료인가요?",
      answer: "현재 제공되는 링카이빙의 모든 기능은 무료입니다! 하지만 앞으로는 프리미엄 사용자만 접근할 수 있는 고급 기능이 출시될 예정입니다. 링카이빙의 앞날을 기다리며, 곧 출시될 새로운 기능도 기대해주세요!"
    },
    {
      question: "다른 디바이스에서도 동시에 접속할 수 있나요?",
      answer: "링카이빙의 페이지와 브라우저 확장 프로그램에 접근할 수 있는 모든 디바이스(스마트폰, 태블릿, 데스크톱 등)에서 동시에 접속할 수 있습니다. 언제 어디서든 링카이빙의 서비스를 즐겨보세요!"
    },
    {
      question: "북마크한 링크들은 안전하게 관리되나요?",
      answer: "여러분이 저장한 모든 정보들은 안전하게 관리됩니다. 링카이빙은 귀하의 콘텐츠를 제3자와 공유하지 않으며 귀하의 데이터는 안전하게  보호됩니다."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="landing-page">
      <Header type="ONBOARDING" />
      <section className="MAIN_FEAT_SEC  main-style">
        <div className="content-img  main-style">
          <img className="bg" src="bgwave1.png" alt="main content1" />
          <img className="bg" src="bgwave2.png" alt="main content2" />
          <img className="bg" src="bgwave3.png" alt="main content3" />
          <div className="transparent"></div>
        </div>
      </section>
      <main className="main-style">
        <section className="SLOGAN_SEC main-style">
          <h1 className="slogan">나만의 똑똑한 링크 아카이브</h1>
          <img className="textLogo" src="textLogo.png" alt="icon" />
          <div>
            <p>똑똑하게 링크를 저장하고 관리까지 하고 싶다면?</p>
            <p>지금, 링카이빙과 함께 시작해보세요!</p>
          </div>
          <a
            className="gotoStore"
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noreferrer"
          >
            <img src="google.png" />
            Chrome Web Store 바로가기
          </a>
        </section>
        <section className="example main-style">
          <img className="examplePage" src="examplePage.png" alt="icon" />
        </section>
        <section className="OTHER_FEAT_SEC  main-style">
          <div className="token">Service</div>
          <div className="comment">
            <p>링카이빙은 유익한 정보를 담은 링크들을 북마크하거나</p>
            <p>북마크한 링크를 찾는 과정에서 어려움을 겪는 IT인들을 많이 마주했어요.</p>
            <p>그러한 어려움을 풀어내고자 여러분에게 링카이빙만의 주요 서비스를 소개합니다!</p>
          </div>

          <div className="container">
            <div className="section-card">
              <div className="icon-container">
                <img src="particle.png" alt="AI 자동 폴더링 아이콘" />
              </div>
              <h2>AI 자동 폴더링</h2>
              <p>저장해야 할 링크는 많은데, 어디에 들어가 있는지 모르겠나요? AI 가 링크의 내용을 분석하고 가장 적합한 폴더를 추천해줍니다. 고민 없는 북마크로 쉽고 똑똑하게 볼 수 있습니다.</p>
            </div>
            <div className="section-card">
              <div className="icon-container">
                <img src="lookfor.png" alt="북마크 검색 아이콘" />
              </div>
              <h2>북마크 검색</h2>
              <p>서랍 속 물건을 찾기 힘들어던 당신. 북마크도 찾기 어려우시죠? 태그나 키워드로 쉽게 찾아볼 수 있어요. 자주 사용하는 북마크를 불러와 바로 볼 수 있습니다.</p>
            </div>
            <div className="section-card">
              <div className="icon-container">
                <img src="history.png" alt="히스토리 & 복원 아이콘" />
              </div>
              <h2>히스토리 & 복원</h2>
              <p>북마크들을 잃어버린 건짐은 이제 그만! 그만하세요. 삭제된 북마크도 30일간 확인 가능하며, 북마크 복원으로 다시 가져올 수 있습니다. 잃어버린 정보도 여러분을 기다리고 있습니다.</p>
            </div>
            <div className="section-card">
              <div className="icon-container">
                <img src="ai.png" alt="AI 자동 요약 아이콘" />
              </div>
              <h2>AI 자동 요약</h2>
              <p>북마크했던 링크가 사라졌군요? 걱정하지 마세요! 북마크했던 링크가 사라져도 간단한 AI 요약을 통해 내용을 확인할 수 있습니다. 원래 계셨던 적이 있나요? 생성된 AI가 깊이 이해하고 인공적으로 보완해 드립니다.</p>
            </div>
          </div>
        </section>
        <section className="main-style">
          <div className="token">FAQ</div>
          <div className="faq-wrapper">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <button
                  className="faq-trigger"
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                >
                  <span className="faq-question">Q. {item.question}</span>
                  <span className={`faq-icon ${openIndex === index ? 'open-faq' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`faq-content ${openIndex === index ? 'open-faq' : ''}`}>
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <div className="footerWave">
        <img className="wave" src="wave1.png" alt="content1" />
        <img className="wave" src="wave2.png" alt="content2" />
        <img className="wave" src="wave3.png" alt="content3" />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
