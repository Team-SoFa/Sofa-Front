import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header-layout.css";
import Modal from "../Modal/Modal"; // Modal 컴포넌트 import

const Header = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  // 모달 열기 함수
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기 함수
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="header">
      {location.pathname === "/userpage" && (
        <>
          <Link to="/userpage">
            <img
              className="menu"
              src="menu-icon.png"
              width={"25px"}
              alt="menu"
              onClick={() => window.location.reload()}
            />
          </Link>
        </>
      )}
      {location.pathname !== "/userpage" && (
        <>
          <img
            className="logo"
            src="example.png"
            alt="logo"
            onClick={() => window.location.reload()}
          />
          <div className="buttons">
            <button className="header-btn">확장 프로그램 추가하기</button>
            <Link to="/login">
              <button className="header-btn">시작하기</button>
            </Link>
            <Link to="/userpage">
              <button className="header-btn">[임시]유저페이지</button>
            </Link>
            <Link to="/signpage">
              <button className="header-btn">[임시]SignPage</button>
            </Link>
            {/* 모달 열기 버튼 */}
            <button className="header-btn" onClick={openModal}>
              [임시]Modal
            </button>
          </div>
        </>
      )}

      {/* Modal 컴포넌트 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 style={{ marginBottom: '1rem '}}>Example for Modal</h2>
        <p>모달 내용입니다.</p>
        <p>모</p>
        <p>달</p>
      </Modal>
    </header>
  );
};

export default Header;
