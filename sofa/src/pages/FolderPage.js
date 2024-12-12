import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Layout/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import Dropdown from "../components/Dropdown/Dropdown";
import BookmarkDetail from "../components/LinkCard/BookmarkDetail";

import "../components/Layout/main-layout.css";
import DropdownDownIcon from "../assets/icon/DropdownDownIcon";

import { linkCardGet, linkCardPost, linkCardAiPost, linkCardAllListGet, linkCardFolderListGet, linkCardDelete, linkCardInfoPatch, linkCardEnterPost } from "../services/linkCardService";
import store from '../redux/store'; // store 가져오기
import { useSelector } from "react-redux";
import { bookmarks6 } from "../components/LinkCard/bookmarks6";

const FolderPage = ({ bookmarks, onDeleteBookmark }) => {
  const [loading, setLoading] = useState(true); //로딩 상태
  const [sortingOption, setSortingOption] = useState("최근저장"); //정렬 기준
  const [sortingDirOption, setSortingDirOption] = useState("오름차순"); //정렬 방향
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBookmark, setSelectedBookmark] = useState(null);

  const location = useLocation(); // 현재 라우트의 location 정보 가져오기
  const { folderName } = useParams(); // URL에서 폴더 ID 가져오기
  const { id: folderId } = location.state || {}; // 전달된 state에서 name 추출
  const [linkCardList, setLinkCardList] = useState([]); // 초기값은 빈 배열로 설정
  const state = store.getState();  // store 상태 가져오기
  const accessToken = useSelector((state) => state.auth.accessToken); // Redux 상태 구독

    useEffect(() => {
      fetchBookmarkData55();

      const response = {
        tagList: [
          {id: 'bJtRCV9n2j7P5_nUVNinbw==', tagType: 'AI'},
          {id: 'O9z9-b7gldXqjKCESXcwvQ==', tagType: 'AI'},
          {id: 'gEKihwVefYy9AIZ4kNNbhg==', tagType: 'AI'}
        ]
      };
      const transformedData = {
        title: "프론트 개발자의 CORS 에러 대응법법",
        url: "https://bohyeon-n.github.io/deploy/web/cors.html", // 디코딩된 URL 사용
        folderId: "프론트엔드드", // 폴더 ID
        tagList: response.tagList?.map(tag => ({
          id: tag.id || 0,
          tagType: tag.tagType || "AI/CUSTOM",
        })) || [],
        memo: "CORS관련 오류해결 메모", // 기본 메모 추가
        summary: "CORS(Cross-Origin Resource Sharing)는 웹 어플리케이션에서 다른 도메인의 리소스에 접근할 때 발생하는 보안 이슈를 해결하는 표준 방법이다. CORS 에러를 해결하기 위해 서버 측에서 설정을 해야 하지만, 프론트 개발자도 withCredentials 옵션을 추가하여 처리할 수 있다. HTTPS에서 HTTP로 요청하거나 CDN을 사용할 때 CORS 에러가 발생할 수 있으며, 크롬을 보안 해제 모드로 실행하여 CORS 에러를 무시할 수도 있다. 결론적으로, CORS 에러를 처리하려면 서버와 프론트에서 협력해야 하며 전반적인 웹보안을 고려해야 한다. ",
      };
      setSelectedBookmark(transformedData);
      console.log("let's start!");
    }, []);
    
    const fetchBookmarkData55 = async () => {
      const bookmarkData = await Promise.all(
        bookmarks6.map(async (bookmark) => {
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
      setLinkCardList(bookmarkData);
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

export default FolderPage;
