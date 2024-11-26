import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TextField from "../Textfield/Textfield";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal"; // Modal 컴포넌트 import

import "./HeaderStyle.css";

const Header = ({ type, toggleMenu }) => {
  const location = useLocation();
  const alarmOptions = [
    { content: "3일 후 휴지통에서 n개의 링크들이 영원히 빛을 잃게 됩니다." },
    { content: "또 어떤 알람이 있을까요" },
    { content: "새로운 업데이트가 있습니다." },
    { content: "새로운 업데이트가 있습니다." },
    { content: "새로운 업데이트가 있습니다." },
    { content: "새로운 업데이트가 있습니다." },
  ].map((item) => ({
    ...item,
    img: "example.png",
  }));
  const folderOpt = ["폴더1", "폴더2", "폴더3"].map((item) => ({
    label: item,
    content: item,
  }));
  const tagsOpt = ["Documents", "Pictures", "Music", "태그어쩌구1"].map(
    (item) => ({
      label: item,
      content: item,
    })
  );

  const headerStyle =
    type === "ONBOARDING"
      ? { backgroundColor: "#F1F1F1", paddingTop: "1rem" }
      : {};
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  // 모달 열기 함수
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기 함수
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="header" style={headerStyle}>
      {/* ========== LINK CARD PAGES ========== */}
      {location.pathname !== "/" && (
        <>
          <Button className="menu" onClick={toggleMenu} label="🔲" />
          <div className="searchers">
            {/*className으로 tag말고 다른 게 들어가면 동작이 이상해서 일단 이거 넣음..*/}
            <Dropdown className="tag" options={folderOpt} label="폴더" />
            <Dropdown className="tag" options={tagsOpt} label="태그선택" />
            <TextField
              className="text_field"
              placeholder="검색어를 입력하세요."
            />
            <Button label="검색" />
          </div>
          <div className="user_info">
            <Dropdown className="alarm" options={alarmOptions} label="알림" />
            <Button label="계정정보" />
          </div>
        </>
      )}

      {/* ========== Landing PAGE ========== */}
      {location.pathname === "/" && (
        <>
          <img
            className="logo"
            src="example.png"
            alt="logo"
            onClick={() => window.location.reload()}
          />
          <div className="buttons">
            <Button label="확장 프로그램 추가하기" />
            <Link to="/homepage">
              <Button label="[임시]홈P" />
            </Link>
            <Link to="/signpage">
              <Button label="[임시]SignP" />
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
        <h2 style={{ marginBottom: "1rem " }}>Example for Modal</h2>
        <p>모달 내용입니다.</p>
        <p>모</p>
        <p>달</p>
      </Modal>
    </header>
  );
};

export default Header;
