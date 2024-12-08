import React, { useState, useEffect } from "react";
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
import { memberGet } from "../../services/memberService";

import { folderGet, folderPost, folderDelete, folderPut} from "../../services/folderService";
import { searchHistoryKeywordsGet, searchHistoryTagsGet, searchGet} from "../../services/searchService";

const Header = ({ type, toggleMenu }) => {
  const location = useLocation();
  const [alarmOption, setAlarmOption] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [folderOption, setFolderOption] = useState([]);
  const [tagOption, setTagOption] = useState([]);
  const [searchValue, setSearchValue] = useState(""); //검색창 최근검색어 임시 값
  const [member, setMember] = useState([]); //검색창 최근검색어 임시 값
  const [searchRecent, setSearchRecent] = useState("");
  // 폴더 조회 핸들러
  const handleFolderGet = async () => {
    try {
      const headers = {};
      const response = await folderGet();

      if (response && response.floderList) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        const folderData = response.floderList.map((folder) => ({
          id: folder.id,
          label: folder.name,
          content: folder.name,
        }));
        setFolderOption(folderData);
      }
      console.log('handleFolderGet 응답:', response);
    } catch (err) {
      console.log('handleFolderGet 실패!');
    } finally {
      console.log('handleFolderGet 종료');  // 로딩 상태 종료
    }
  };

  // 태그 조회 핸들러
  const handleSearchHistoryTagsGet = async () => {
    try {
      const headers = {};
      const response = await searchHistoryTagsGet();

      if (response) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        const tagData = response.map((tag) => ({
          label: tag,
          content: tag,
        }));
        setTagOption(tagData);
      }
      console.log('handleSearchHistoryTagsGet 응답:', response);
    } catch (err) {
      console.log('handleSearchHistoryTagsGet 실패!');
    } finally {
      console.log('handleSearchHistoryTagsGet 종료');  // 로딩 상태 종료
    }
  };

  // 태그 조회 핸들러
  const handleMemberGet = async () => {
    try {
      const headers = {};
      const response = await memberGet();

      if (response) {
        const memberData = {
          profileImage: "example.png",
          name: response.name,
          email: response.email
        }
        setMember(memberData);
      }
      console.log('handleMemeberGet 응답:', response);
    } catch (err) {
      console.log('handleMemeberGet 실패!');
    } finally {
      console.log('handleMemeberGet 종료');  // 로딩 상태 종료
    }
  };

  // 태그 조회 핸들러
  const handleHistoryKeywordGet = async () => {
    try {
      const headers = {};
      const response = await searchHistoryKeywordsGet();

      if (response) {
        const historyData = response.map((history)=> ({
          img: "example.png",
          content: history
        }));
        setSearchRecent(historyData);
      }
      console.log('handleHistoryKeywordGet 응답:', response);
    } catch (err) {
      console.log('handleHistoryKeywordGet 실패!');
    } finally {
      console.log('handleHistoryKeywordGet 종료');  // 로딩 상태 종료
    }
  };

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

  // ================ 임시 데이터 =====================

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

  const headerStyle =
    type === "ONBOARDING"
      ? { backgroundColor: "#F1F1F1", paddingTop: "1rem" }
      : {};
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  // 모달 open/close 함수
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const hanldeSearchGet = async () => {
    try {
      const response = await searchGet(
        null,
        null,
        null,
        0,
        10,
        "RECENTLY_MODIFIED",
        "DESCENDING"
      );

      console.log(searchValue);

      if(response) {
        console.log(response);
      }
    } catch (err) {
      console.error('hanldeSearchGet 실패:', err);
    }
  };
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
              options={folderOption}              
              label="폴더 전체"
              Icon={DownIcon}
              onSelect={handleFolderSelect}
              onOpen={handleFolderGet}
            />
            <Dropdown
              className="dropdown-tag-select"
              options={tagOption}
              label="태그선택"
              Icon={DownIcon}
              onSelect={handleTagSelect}
              onOpen={handleSearchHistoryTagsGet}
            />
            <TextField
              className="text_field"
              placeholder="검색어를 입력하세요."
              Icon={SearchIcon}
              value={searchValue}
              onChange={handleSearchChange}
              recentSearches={searchRecent} // 최근 검색어 전달
              onSearchSelect={
                (selected) => setSearchValue(selected) // 선택된 검색어를 검색창에 반영
              }
              onSearchDelete={handleSearchDelete}
              onFetchSearches={handleHistoryKeywordGet} // 클릭 시 호출될 API 핸들러 전달
            />
            <Button 
              className="search" 
              label="검색" 
              onClick={hanldeSearchGet}
            />
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
              userInfo={member ? member: userInfo}
              imgSrc="example.png"
              options={userPage}
              onSelect={openModal}
              onOpen={handleMemberGet}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
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
