import React, { useState, useEffect } from "react";
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
import ThumbUpIcon from "../../assets/icon/ThumbUpIcon";

import { memberGet } from "../../services/memberService";
import {
  folderGet,
  folderPost,
  folderDelete,
  folderPut,
} from "../../services/folderService";
import {
  searchHistoryKeywordsGet,
  searchHistoryTagsGet,
  searchGet,
} from "../../services/searchService";
import SearchIcon from "../../assets/icon/SearchIcon";
import RestoreIcon from "../../assets/icon/RestoreIcon";

const Header = ({ type, toggleMenu }) => {
  const location = useLocation();
  const [alarmOption, setAlarmOption] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태
  const [activeSetting, setActiveSetting] = useState("account-info");
  const [initialSetting, setInitialSetting] = useState("");

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

      if (response && response.folderList) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        const folderData = response.folderList.map((folder) => ({
          id: folder.id,
          label: folder.name,
          content: folder.name,
        }));
        setFolderOption(folderData);
      }
      console.log("handleFolderGet 응답:", response);
    } catch (err) {
      console.log("handleFolderGet 실패!");
    } finally {
      console.log("handleFolderGet 종료"); // 로딩 상태 종료
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
      console.log("handleSearchHistoryTagsGet 응답:", response);
    } catch (err) {
      console.log("handleSearchHistoryTagsGet 실패!");
    } finally {
      console.log("handleSearchHistoryTagsGet 종료"); // 로딩 상태 종료
    }
  };

  // 태그 조회 핸들러
  const handleMemberGet = async () => {
    try {
      const response = await memberGet();

      if (response) {
        const memberData = {
          profileImage: `${process.env.PUBLIC_URL}/example.png`,
          name: response.name,
          email: response.email,
        };
        setMember(memberData);
      }
      console.log("handleMemeberGet 응답:", response);
    } catch (err) {
      console.log("handleMemeberGet 실패!");
    } finally {
      console.log("handleMemeberGet 종료"); // 로딩 상태 종료
    }
  };

  // 태그 조회 핸들러
  const handleHistoryKeywordGet = async () => {
    try {
      const headers = {};
      const response = await searchHistoryKeywordsGet();

      if (response) {
        const historyData = response.map((history) => ({
          img: `${process.env.PUBLIC_URL}/example.png`,
          content: history,
        }));
        setSearchRecent(historyData);
      }
      console.log("handleHistoryKeywordGet 응답:", response);
    } catch (err) {
      console.log("handleHistoryKeywordGet 실패!");
    } finally {
      console.log("handleHistoryKeywordGet 종료"); // 로딩 상태 종료
    }
  };

  const userPage = [
    { Icon: SettingIcon, content: "설정" },
    { Icon: CallLineIcon, content: "고객 센터" },
    { Icon: LogoutIcon, content: "로그아웃" },
  ];

  // ================ 임시 데이터 =====================
  const userInfo = {
    profileImage: `${process.env.PUBLIC_URL}/example.png`, // 프로필 이미지 URL
    name: "홍길동", // 사용자 이름
    email: "hong@example.com", // 사용자 이메일
  };

  //최근 검색어 임시 데이터
  const [recentSearches, setRecentSearches] = useState([
    { Icon: RestoreIcon, content: "React" },
    { Icon: RestoreIcon, content: "개발자 꿀팁" },
    { Icon: RestoreIcon, content: "자바스크립트개발" },
    { Icon: RestoreIcon, content: "커피" },
    { Icon: RestoreIcon, content: "코카콜라 제로슈가" },
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

  //전체 태그
  const [tagsOpt, setTagsOpt] = [
    "Documents",
    "Pictures",
    "PICTURES",
    "태그어쩌구1",
  ].map((item) => ({
    label: item,
    content: item,
  }));

  // 임시 알림 >>>>>>>>>>
  const [alarmOptions, setAlarmOptions] = useState([
    {
      Icon: RestoreIcon,
      label: "리마인드",
      content:
        "‘IT 직무 10가지 알아보기’ 링크 외 4개의 링크가 리마인드함에 있습니다. 리마인드함에 들어가 링크들을 확인해보세요!",
      date: "24.11.25",
      isNew: true,
    },
    {
      Icon: ThumbUpIcon,
      label: "추천 링크",
      content:
        "성명근님님의 관심사에 맞는 링크들을 추천합니다! ‘[위시켓] 반응형 디자인의 최종장, 그 끝은 어디까지인가’ 외 2개의 링크가 있어요.",
      date: "24.11.25",
      isNew: false,
    },
    {
      Icon: LogoutIcon,
      label: "업데이트 안내",
      content: "새로운 업데이트가 있습니다.",
      date: "24.11.25",
      isNew: true,
    },
  ]);

  const profileImg = `${process.env.PUBLIC_URL}/example.png`;

  // <<<<<<<<<<<<<<<<<<<<< 임시 데이터

  // 메뉴 열림 여부 판정
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleMenu();
  };
  // 헤더 알림 옵션 선택했을 때
  const handleAlarmSelect = (option) => {
    setAlarmOption(option.content);

    // `isNew` 값을 업데이트
    setAlarmOptions((prevOptions) =>
      prevOptions.map((item) =>
        item.content === option.content ? { ...item, isNew: false } : item
      )
    );
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
    if (option.content === "설정") {
      setInitialSetting("settings"); // 초기값 설정
    } else if (option.content === "고객 센터") {
      setInitialSetting("customer-support");
    } else if (option.content === "로그아웃") {
      setInitialSetting("logout");
    } else {
      setInitialSetting("unknown");
    }
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const headerStyle =
    type === "ONBOARDING"
      ? { backgroundColor: "#F1F1F1", paddingTop: "1rem" }
      : {};

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

      if (response) {
        console.log(response);
      }
    } catch (err) {
      console.error("hanldeSearchGet 실패:", err);
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
              className="basic"
              options={folderOption}
              label="폴더 전체"
              Icon={DownIcon}
              onSelect={handleFolderSelect}
              onOpen={handleFolderGet}
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
              Icon={SearchIcon}
              placeholder="검색어를 입력하세요."
              value={searchValue}
              onChange={handleSearchChange}
              recentSearches={recentSearches} // 최근 검색어 전달
              onSearchSelect={
                (selected) => setSearchValue(selected) // 선택된 검색어를 검색창에 반영
              }
              onSearchDelete={handleSearchDelete}
              onFetchSearches={handleHistoryKeywordGet} // 클릭 시 호출될 API 핸들러 전달
            />
            <Link to="/searchedpage">
              <Button
                className="search"
                label="검색"
                onClick={hanldeSearchGet}
              />
            </Link>
            <Button
              label="초기화"
              onClick={() => {
                setFolderOption([]); // 폴더 초기화
                setTagOption([]); // 태그 초기화
              }}
            />
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
              userInfo={member ? member : userInfo}
              imgSrc={`${process.env.PUBLIC_URL}/example.png`}
              options={userPage}
              onSelect={openModal}
              onOpen={handleMemberGet}
            />
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              initialSetting={initialSetting}
            />
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
