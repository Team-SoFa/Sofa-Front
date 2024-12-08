import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TextField from "../Textfield/Textfield";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal"; // Modal 컴포넌트 import

import "./HeaderStyle.css";
import MenuIcon from "../../assets/icon/MenuIcon";
import DownIcon from "../../assets/icon/DownIcon";
import SearchIcon from "../../assets/icon/SearchIcon";
import AlarmLineIcon from "../../assets/icon/AlarmLineIcon";
import SettingIcon from "../../assets/icon/SettingIcon";
import CallLineIcon from "../../assets/icon/CallLineIcon";
import LogoutIcon from "../../assets/icon/LogoutIcon";

const Header = ({ type, toggleMenu }) => {
  const location = useLocation();
  const [alarmOption, setAlarmOption] = useState("");
  const [folderOption, setFolderOption] = useState("폴더선택");
  const [tagOption, setTagOption] = useState("태그선택");
  const [searchValue, setSearchValue] = useState(""); //검색창 최근검색어 임시 값
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Modal
  const [modalContent, setModalContent] = useState(null); // 모달에 표시할 내용 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태

  const userPage = [
    { Icon: SettingIcon, content: "설정" },
    { Icon: CallLineIcon, content: "고객 센터" },
    { Icon: LogoutIcon, content: "로그아웃" },
  ];

  // ================ 임시 데이터 =====================
  const userInfo = {
    profileImage: "example.png", // 프로필 이미지 URL
    name: "홍길동", // 사용자 이름
    email: "hong@example.com", // 사용자 이메일
  };
  const [recentSearches, setRecentSearches] = useState([
    { img: "example.png", content: "React" },
    { img: "example.png", content: "JavaScript" },
    { img: "example.png", content: "Frontend" },
    { img: "example.png", content: "CSS" },
    { img: "example.png", content: "개발자 꿀팁" },
    { img: "example.png", content: "html은 무엇인가" },
  ]);

  const folderOpt = ["폴더1", "폴더2", "폴더3"].map((item) => ({
    label: item,
    content: item,
  }));
  const tagsOpt = ["Documents", "Pictures", "PICTURES", "태그어쩌구1"].map(
    (item) => ({
      label: item,
      content: item,
    })
  );
  const alarmOptions = [
    {
      img: "example.png",
      label: "리마인드",
      content: "3일 후 휴지통에서 n개의 링크들이 영원히 빛을 잃게 됩니다.",
    },
    {
      img: "example.png",
      label: "어쩌구",
      content: "또 어떤 알람이 있을까요",
    },
    {
      img: "example.png",
      label: "리마인드",
      content: "새로운 업데이트가 있습니다.",
    },
    {
      img: "example.png",
      label: "리마인드",
      content: "새로운 업데이트가 있습니다.",
    },
    {
      img: "example.png",
      label: "리마인드",
      content: "새로운 업데이트가 있습니다.",
    },
    {
      img: "example.png",
      label: "리마인드",
      content: "새로운 업데이트가 있습니다.",
    },
  ].map((item) => ({
    ...item,
  }));
  const profileImg = "example.png";

  // <<<<<<<<<<<<<<<<<<<<< 임시 데이터

  // 메뉴 열림 여부 판정
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleMenu();
  };
  const handleAlarmSelect = (option) => {
    setAlarmOption(option.content);
  };
  const handleFolderSelect = (option) => {
    setFolderOption(option.content);
  };
  const handleTagSelect = (option) => {
    setTagOption(option.content);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  // 검색어 삭제 처리 함수
  const handleSearchDelete = (searchToDelete) => {
    const updatedSearches = recentSearches.filter(
      (search) => search.content !== searchToDelete
    );
    setRecentSearches(updatedSearches); // 상태 업데이트
  };

  // Modal Contents >>>>>>>>>>>>>>>>>>
  const openModal = (option) => {
    let content;
    switch (option.content) {
      case "설정":
        content = <div>여기서 설정을 변경할 수 있습니다.</div>;
        break;
      case "고객 센터":
        content = <div>고객 센터 정보를 확인하세요.</div>;
        break;
      case "로그아웃":
        content = <div>로그아웃하시겠습니까?</div>;
        break;
      default:
        content = <div>알 수 없는 작업입니다.</div>;
    }
    setModalContent(content);
    setIsModalOpen(true); // 모달 열기
  };
  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const headerStyle =
    type === "ONBOARDING"
      ? { backgroundColor: "#F1F1F1", paddingTop: "1rem" }
      : {};

  return (
    <header className="header" style={headerStyle}>
      {/* ========== LINK CARD PAGES ========== */}
      {location.pathname !== "/" && (
        <>
          <Button
            className={`menu-img ${isMenuOpen ? "menu-open" : ""}`}
            onClick={handleMenuToggle}
            Icon={MenuIcon}
            imgAlt="menu"
          />
          <div className="searchers">
            <Dropdown
              className="dropdown-folder-select"
              options={folderOpt}
              label="폴더 전체"
              Icon={DownIcon}
              onSelect={handleFolderSelect}
            />
            <Dropdown
              className="dropdown-tag-select"
              options={tagsOpt}
              label="태그선택"
              Icon={DownIcon}
              onSelect={handleTagSelect}
            />
            <TextField
              className="text_field"
              placeholder="검색어를 입력하세요."
              Icon={SearchIcon}
              value={searchValue}
              onChange={handleSearchChange}
              recentSearches={recentSearches} // 최근 검색어 전달
              onSearchSelect={
                (selected) => setSearchValue(selected) // 선택된 검색어를 검색창에 반영
              }
              onSearchDelete={handleSearchDelete}
            />
            <Button className="search" label="검색" />
            <Button label="초기화" />
          </div>
          <div className="user_info">
            <Dropdown
              className="alarm"
              options={alarmOptions}
              Icon={AlarmLineIcon}
              onSelect={handleAlarmSelect}
            />
            <Dropdown
              className="user-info"
              type="user-info"
              userInfo={userInfo}
              imgSrc="example.png"
              options={userPage}
              onSelect={openModal}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              {modalContent}
            </Modal>
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
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
