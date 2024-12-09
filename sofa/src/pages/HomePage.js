import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Layout/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
// import Tagcard from "../components/Tagcard/Tagcard";
import { folderGet, folderPost, folderDelete, folderPut} from "../services/folderService";

import "../components/Layout/main-layout.css";
import RemovedItemsPage from "./RemovedItemsPage";
import FolderPage from "./FolderPage";
import BookmarkDetail from "../components/LinkCard/BookmarkDetail"; // 상세 정보 컴포넌트 import

const HomePage = ({ bookmarks, onAddBookmark, onDeleteBookmark }) => {
  const location = useLocation();
  const [username, setUsername] = useState(""); //사용자 이름
  const [mostPopularTags, setMostPopularTags] = useState(""); //탑태그
  const [loading, setLoading] = useState(true); //로딩 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false); //사이드메뉴 열림 상태
  const [selectedBookmark, setSelectedBookmark] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false); //자세히보기메뉴 열림 상태

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
                <p className="_title">최근에 방문한 링크</p>
                <Link to="/homepage" className="more">
                  더보기&gt;
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
                  <Button label={mostPopularTags} className="tag" />를 포함한
                  링크
                </p>
                <Link to="/homepage" className="more">
                  더보기&gt;
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

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // USER INFO
        const userData = { nickname: "000" };
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
  }, []);

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
    console.log('넌누구냐',bookmarks);
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
