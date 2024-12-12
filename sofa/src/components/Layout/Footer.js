import React from "react";
import { Link } from "react-router-dom";
import "./footer-layout.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>나만의 똑똑한 링크 아카이빙</h2>
      <button className="button">지금 시작하기</button>
      <div className="footer-contents">
        <div className="left-contents">
          <p>©️ Linkiving All Rights Reserved 2024</p>
        </div>
        <div className="right-contents">
          <Link to="/termspage">
            <p>이용약관</p>
          </Link>
          <Link to="/privacypolicy">
            <p>개인정보처리방침</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
