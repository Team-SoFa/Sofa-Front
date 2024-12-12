import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Layout/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
// import Tagcard from "../components/Tagcard/Tagcard";
import {
  folderGet,
  folderPost,
  folderDelete,
  folderPut,
} from "../services/folderService";
import RemovedItemsPage from "./RemovedItemsPage";
import FolderPage from "./FolderPage";
import BookmarkDetail from "../components/LinkCard/BookmarkDetail"; // 상세 정보 컴포넌트 import
import store from "../redux/store";
import { articleRecommendGet } from "../services/articleService";

import "../components/Layout/main-layout.css";
import RightIcon from "../assets/icon/RightIcon";

const HomePage = ({ bookmarks, onAddBookmark, onDeleteBookmark }) => {
  // Page
  const location = useLocation();
  // User Info
  const [username, setUsername] = useState(""); //사용자 이름
  const [mostPopularTags, setMostPopularTags] = useState(""); //탑태그
  const [loading, setLoading] = useState(true); //로딩 상태
  //Side Menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //  Link Card
  const [isDetailOpen, setIsDetailOpen] = useState(false); //자세히보기메뉴 열림 상태
  const [selectedBookmark, setSelectedBookmark] = useState(null);

  const renderSection = () => {
    switch (location.pathname) {
      case "/removeditemspage":
        return <RemovedItemsPage />;
      case "/folderpage":
        return <FolderPage bookmarks={bookmarks} />;
      default:
        return (
          <div className="main-box">
            <h3>안녕하세요, {username}님!</h3>

            <div className="link-set">
              <div className="_text">
                <p className="_title">{username}님께 추천하는 링크</p>
              </div>
              <ShowLinkCard
                bookmarks={bookmarks}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onLinkCardClick={handleBookmarkClick} // 북마크 클릭 핸들러 전달
                sideMenuOpen={isMenuOpen}
                bookmarkDetailOpen={selectedBookmark}
                // sortingOption={sortingOption}
              />
            </div>
            <div className="link-set">
              <div className="_text">
                <p className="_title">최근 방문한 링크</p>
                <Link to="/homepage" className="more">
                  <span style={{ color: "var(--font-gray)" }}>
                    더보기
                    <RightIcon
                      style={{
                        width: "0.7rem",
                        height: "0.65rem",
                        marginLeft: "0.2rem",
                      }}
                    />
                  </span>
                </Link>
              </div>
              <ShowLinkCard
                bookmarks={bookmarks}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onLinkCardClick={handleBookmarkClick}
                sideMenuOpen={isMenuOpen}
                bookmarkDetailOpen={selectedBookmark}
                // sortingOption={sortingOption}
              />
            </div>
            <div className="link-set">
              <div className="_text">
                <p className="_title">
                  {username}님의 최다 태그
                  <span
                    style={{
                      fontSize: "0.813rem",
                      backgroundColor: "var(--purple-light)",
                      padding: "0.3rem",
                      marginInline: "0.3rem",
                      borderRadius: "0.5rem",
                    }}
                  >
                    {mostPopularTags}
                  </span>
                  를 포함한 링크
                </p>
                <Link to="/homepage" className="more">
                  <span style={{ color: "var(--font-gray)" }}>
                    더보기
                    <RightIcon
                      style={{
                        width: "0.7rem",
                        height: "0.65rem",
                        marginLeft: "0.2rem",
                      }}
                    />
                  </span>
                </Link>
              </div>
              <ShowLinkCard
                bookmarks={bookmarks}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onLinkCardClick={handleBookmarkClick}
                sideMenuOpen={isMenuOpen}
                bookmarkDetailOpen={selectedBookmark}
              />
            </div>
          </div>
        );
    }
  };

  const getName = () => {
    const state = store.getState();
    return state.member.name
  }

  useEffect(() => {
    console.log("Hello");
    const fetchUserInfo = async () => {
      try {
        // USER INFO

        const name = getName();
        console.log("name", name);
        const userData = { nickname: name };
        setUsername(userData.nickname);

        // MOST_POPULAR_TAGS
        const topTagsData = { label: "탑태그" };
        setMostPopularTags(topTagsData.label);

        setLoading(false);
      } catch (error) {
        console.error("Fail to get user information", error);
        setLoading(false);
      }
    };
    fetchUserInfo();

    fetchArticleRecommendGet();

  }, []);

  const fetchArticleRecommendGet = async () => {
    try {
      const response = await articleRecommendGet();

      console.log('fetchArticleRecommendGet', response);
    } catch(error) {
      console.error('error', error);
    }
  };

  const handleEdit = (id) => {
    //추후 수정 기능 코드 추가
  };
  const handleDelete = (id) => onDeleteBookmark(id);

  //SideMenu Toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookmarkClick = (bookmark) => {
    setSelectedBookmark(bookmark);
    setIsDetailOpen(true); // 클릭 시 BookmarkDetail 열기
  };

  const toggleDetail = () => {
    if (isDetailOpen) setSelectedBookmark(null); // 닫을 때만 선택 초기화
    setIsDetailOpen(!isDetailOpen);
    console.log("넌누구냐", bookmarks);
  };

  return (
    <div
      className={`main-page 
        ${isMenuOpen ? "menu-open" : ""} 
        ${selectedBookmark ? "show-detail" : ""}`}
    >
      <Header toggleMenu={toggleMenu} />
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <BookmarkDetail
        bookmark={selectedBookmark}
        bookmarks={bookmarks}
        isOpen={isDetailOpen && selectedBookmark !== null}
        toggleDetail={toggleDetail}
      />
      <section>{renderSection()}</section>
    </div>
  );
};

export default HomePage;
