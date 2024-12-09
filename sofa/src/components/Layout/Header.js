import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TextField from "../Textfield/Textfield";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal"; // Modal 컴포넌트 import
import Toggle from "../Toggle/Toggle";

import "./HeaderStyle.css";
import "../Modal/Modal.css";
import MenuIcon from "../../assets/icon/MenuIcon";
import DownIcon from "../../assets/icon/DownIcon";
import AlarmLineIcon from "../../assets/icon/AlarmLineIcon";
import SettingIcon from "../../assets/icon/SettingIcon";
import CallLineIcon from "../../assets/icon/CallLineIcon";
import LogoutIcon from "../../assets/icon/LogoutIcon";
import ProfileFilledIcon from "../../assets/icon/ProfileFilledIcon";
import CancelLineIcon from "../../assets/icon/CancelLineIcon";

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
  const [activeSetting, setActiveSetting] = useState("account-info");

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

  //최근 검색 태그
  const [recentTags, setRecentTags] = useState(
    ["Documents", "Pictures", "오잉", "웅", "모던웹을위한Javascript"].map(
      (item) => ({
        label: item,
        content: item,
      })
    )
  );

  //선택된 태그
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
        content = (
          <div className="modal-container">
            <div className="modal-sidebar">
              <div className="modal-title">
                <SettingIcon />
                <h3>설정</h3>
              </div>
              <Button
                className="modal-side-menu"
                label="계정 정보"
                Icon={ProfileFilledIcon}
                onClick={() => setActiveSetting("account-info")} // 계정 정보 페이지 표시
              />
              <Button
                className="modal-side-menu"
                label="알림 설정"
                Icon={AlarmLineIcon}
                onClick={() => setActiveSetting("alarm-settings")} // 알림 설정 페이지 표시
              />
            </div>
            <div className="modal-content-container">
              {activeSetting === "account-info" && (
                <div>
                  <div className="modal-content">
                    <h4>이메일</h4>
                    <p>{userInfo.email}</p>
                  </div>
                  <div className="modal-content">
                    <h4>회원 탈퇴</h4>
                    <p>
                      회원 탈퇴 후 저장한 정보 및 맞춤 서비스 이용기록은 모두
                      삭제됩니다.
                    </p>
                    <Button
                      className="modal-basic-btn"
                      Icon={CancelLineIcon}
                      label="회원 탈퇴"
                      onClick={() => setActiveSetting("withdrawal")} // 회원 탈퇴 화면 표시
                    />
                  </div>
                </div>
              )}
              {activeSetting === "alarm-settings" && (
                <div>
                  <h4>이메일 알림</h4>
                  <div className="alarm-setting">
                    <Toggle label="전체" />
                  </div>
                  <div className="alarm-setting">
                    <Toggle label="리마인드함 알림" />
                    <Toggle label="추천 링크 알림" />
                    <Toggle label="서비스 공지사항 및 업데이트 안내" />
                  </div>
                </div>
              )}
              {activeSetting === "withdrawal" && (
                <div>
                  <h3>회원 탈퇴</h3>
                  <p>
                    링카이빙에 아껴주신 시간에 감사드립니다. 고객님이 느끼셨던
                    점을 공유해주시면 더욱 건강한 서비스를 제공할 수 있도록
                    하겠습니다.
                  </p>
                  <div className="modal-btn-container">
                    <Button
                      label="취소"
                      onClick={() => setActiveSetting("account-info")}
                    />
                    <Button label="탈퇴" />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
        break;
      case "고객 센터":
        content = (
          <div className="modal-container">
            <div className="modal-sidebar">
              <div className="modal-title">
                <CallLineIcon />
                <h3>고객 센터</h3>
              </div>
            </div>
            <div className="modal-content-container">
              <div className="modal-content">
                <h4>문의하기</h4>
                <p>서비스 이용 중 문의사항 발생 시, 다음으로 문의해주세요.</p>
                <Button className="modal-basic-btn" label="피드백 보내기" />
              </div>
              <div className="modal-content">
                <h4>피드백 보내기</h4>
                <p>피드백을 보내보세요! 링카이빙에게 큰 힘이 됩니다.</p>
                <Button className="modal-basic-btn" label="피드백 보내기" />
              </div>
            </div>
          </div>
        );
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
              className="tag"
              options={tagsOpt}
              type="tag"
              label="태그선택"
              Icon={DownIcon}
              onSelect={handleTagSelect}
              recentTags={recentTags}
            />
            <TextField
              className="text_field"
              placeholder="검색어를 입력하세요."
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
