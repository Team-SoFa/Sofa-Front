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
import { bookmarks } from "../components/LinkCard/bookmarks";
import { bookmarks2 } from "../components/LinkCard/bookmarks2";
import { bookmarks3 } from "../components/LinkCard/bookmarks3";
import { bookmarks4 } from "../components/LinkCard/bookmarks4";
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
  const [bookmarks11, setBookmarks11] = useState([]);
  const [bookmarks22, setBookmarks22] = useState([]);
  const [bookmarks33, setBookmarks33] = useState([]);
  const [bookmarks44, setBookmarks44] = useState([]);

  useEffect(() => {
    fetchBookmarkData11();
    fetchBookmarkData22();
    // fetchBookmarkData33();
    // fetchBookmarkData44();
    console.log("let's start!");
  }, []);
  
  const fetchBookmarkData11 = async () => {
    const bookmarkData = await Promise.all(
      bookmarks.map(async (bookmark) => {
        const imageUrl = await fetchImageUrlFromPage(bookmark.url);
        console.log(bookmark.title, imageUrl);
        return {
          id: bookmark.id,
          title: bookmark.title,
          url: bookmark.url,
          imageUrl: imageUrl
        };
      })
    );
    setBookmarks11(bookmarkData);
  };

  const fetchBookmarkData22 = async () => {
    const bookmarkData = await Promise.all(
      bookmarks2.map(async (bookmark) => {
        console.log(bookmark.title);
        const imageUrl = await fetchImageUrlFromPage(bookmark.url);
        console.log(imageUrl);
        return {
          id: bookmark.id,
          title: bookmark.title,
          url: bookmark.url,
          imageUrl: imageUrl
        };
      })
    );
    setBookmarks22(bookmarkData);
  };

  const fetchBookmarkData33 = async () => {
    const bookmarkData = await Promise.all(
      bookmarks3.map(async (bookmark) => {
        console.log(bookmark.title);
        const imageUrl = await fetchImageUrlFromPage(bookmark.url);
        console.log(imageUrl);
        return {
          id: bookmark.id,
          title: bookmark.title,
          url: bookmark.url,
          imageUrl: imageUrl
        };
      })
    );
    setBookmarks33(bookmarkData);
  };

  const fetchBookmarkData44 = async () => {
    const bookmarkData = await Promise.all(
      bookmarks3.map(async (bookmark) => {
        console.log(bookmark.title);
        const imageUrl = await fetchImageUrlFromPage(bookmark.url);
        console.log(imageUrl);
        return {
          id: bookmark.id,
          title: bookmark.title,
          url: bookmark.url,
          imageUrl: imageUrl
        };
      })
    );
    setBookmarks44(bookmarkData);
  };
  
  const fetchImageUrlFromPage = async (url) => {
    try {
      const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
      const targetUrl = url;
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

      const response = await fetch(proxyUrl + targetUrl, {
        origin: API_BASE_URL
      });
      const html = await response.text(); // HTML 텍스트로 변환

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // <meta> 태그에서 이미지 URL 추출 (OG 이미지 등)
      let imageUrl = doc.querySelector('meta[property="og:image"]')?.content;

      if (!imageUrl) {
        // <img> 태그에서 src 추출
        imageUrl = doc.querySelector('img')?.src;
      }

      if (imageUrl) {
        return imageUrl; // 이미지 URL 반환
      } else {
        throw new Error('이미지를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('이미지 URL 추출 실패:', error);
      throw error;
    }
  };

  const renderSection = () => {
    switch (location.pathname) {
      case "/removeditemspage":
        return <RemovedItemsPage />;
      case "/folderpage":
        return <FolderPage bookmarks={bookmarks11} />;
      default:
        return (
          <div className="main-box">
            <h3>안녕하세요, {username}님!</h3>

            <div className="link-set">
              <div className="_text">
                <p className="_title">{username}님께 추천하는 링크</p>
              </div>
              <ShowLinkCard
                bookmarks={bookmarks11}
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
                bookmarks={bookmarks22}
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
    } catch (error) {
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
