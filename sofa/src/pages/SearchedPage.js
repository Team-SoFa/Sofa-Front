import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Layout/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import Dropdown from "../components/Dropdown/Dropdown";
import BookmarkDetail from "../components/LinkCard/BookmarkDetail";

import "../components/Layout/main-layout.css";
import DropdownDownIcon from "../assets/icon/DropdownDownIcon";

import {
  linkCardGet,
  linkCardPost,
  linkCardAiPost,
  linkCardAllListGet,
  linkCardFolderListGet,
  linkCardDelete,
  linkCardInfoPatch,
  linkCardEnterPost,
} from "../services/linkCardService";
import store from "../redux/store"; // store 가져오기
import { useSelector } from "react-redux";

const SearchedPage = ({ bookmarks, onDeleteBookmark }) => {
  const [loading, setLoading] = useState(true); //로딩 상태
  const [sortingOption, setSortingOption] = useState("최근저장"); //정렬 기준
  const [sortingDirOption, setSortingDirOption] = useState("오름차순"); //정렬 방향
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBookmark, setSelectedBookmark] = useState(null);

  const location = useLocation(); // 현재 라우트의 location 정보 가져오기
  const { folderName } = useParams(); // URL에서 폴더 ID 가져오기
  const { id: folderId } = location.state || {}; // 전달된 state에서 name 추출
  const [linkCardList, setLinkCardList] = useState([]); // 초기값은 빈 배열로 설정
  const state = store.getState(); // store 상태 가져오기
  const accessToken = useSelector((state) => state.auth.accessToken); // Redux 상태 구독

  const sortingOpt = ["최근저장", "오래된저장", "이름순"].map((item) => ({
    label: item,
    content: item,
  }));
  const sortingDirOpt = ["오름차순", "내림차순"].map((item) => ({
    label: item,
    content: item,
  }));

  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDetail = () => {
    if (isDetailOpen) setSelectedBookmark(null); // 닫을 때 선택 초기화
    setIsDetailOpen(!isDetailOpen);
  };

  useEffect(() => {
    if (!accessToken || !folderId) return;

    setLinkCardList([]); // 기존 데이터 초기화

    const fetchLinkCardList = async () => {
      try {
        const response = await linkCardFolderListGet(
          folderId,
          "RECENTLY_SAVED",
          "ASCENDING",
          0,
          10
        );

        if (response) {
          console.log("API Response:", response.data);
          setLinkCardList(response.data); // 상태 업데이트
        }
      } catch (error) {
        console.log("fetchLinkCardList error:", error);
      }
    };

    fetchLinkCardList();
  }, [accessToken, folderId]);

  useEffect(() => {
    console.log("Updated linkCardList:", linkCardList);
  }, [linkCardList]);

  const handleDelete = (id) => onDeleteBookmark(id);
  const handleEdit = (id) => {
    //추후 수정 기능 코드 추가
  };

  // SORTING
  const handleSortingSelect = (option) => {
    setSortingOption(option.content);
  };
  const handleSortingDirSelect = (option) => {
    setSortingDirOption(option.content);
  };

  const handleBookmarkClick = (bookmark) => {
    console.log("Clicked bookmark:", bookmark);
    setSelectedBookmark(bookmark); // 클릭된 북마크 상태 저장
    setIsDetailOpen(true); // 클릭 시 상세 보기 열기
  };

  const handleBookmarkClose = () => {
    setSelectedBookmark(null); // 상세 정보를 닫기
  };

  return (
    <div
      className={`main-page ${isMenuOpen ? "menu-open" : ""} ${
        selectedBookmark ? "show-detail" : ""
      }`}
    >
      <Header toggleMenu={toggleMenu} />
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <section className="main-box">
        <h3>{folderName}</h3>

        <div className="sorting-options">
          <Dropdown
            className="sorting"
            Icon={DropdownDownIcon}
            label="최근저장"
            options={sortingOpt}
            onSelect={handleSortingSelect}
          />
          <Dropdown
            className="sorting"
            Icon={DropdownDownIcon}
            label="오름차순"
            options={sortingDirOpt}
            onSelect={handleSortingDirSelect}
          />
        </div>

        <ShowLinkCard
          bookmarks={linkCardList}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onLinkCardClick={handleBookmarkClick} // 북마크 클릭 핸들러 전달
          sideMenuOpen={isMenuOpen}
          bookmarkDetailOpen={selectedBookmark}
          sortingOption={sortingOption}
          sortingDirOption={sortingDirOption}
        />
      </section>
      {selectedBookmark && (
        <div className="bookmark-detail-container">
          <BookmarkDetail
            bookmark={selectedBookmark}
            bookmarks={linkCardList}
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            isOpen={isDetailOpen && selectedBookmark !== null}
            toggleDetail={toggleDetail}
            onClose={handleBookmarkClose}
            onLinkCardClick={handleBookmarkClick} // 북마크 클릭 핸들러 전달
          />
        </div>
      )}
    </div>
  );
};

export default SearchedPage;
