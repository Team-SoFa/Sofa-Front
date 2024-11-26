import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import Dropdown from "../components/Dropdown/Dropdown";
import BookmarkDetail from "../components/LinkCard/BookmarkDetail";

import "../components/Layout/main-layout.css";

const RemovedItemsPage = ({ bookmarks, onAddBookmark, onDeleteBookmark }) => {
  const [loading, setLoading] = useState(true); //로딩 상태
  const [sortingOption, setSortingOption] = useState("");
  // const [selectedTags, setSelectedTags] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBookmark, setSelectedBookmark] = useState(false);

  const sortingOpt = ["최근 저장", "오래된 저장", "이름순"];
  const sortingDirOpt = ["오름차순", "내림차순"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDelete = (id) => onDeleteBookmark(id);
  const handleEdit = (id) => {
    //추후 수정 기능 코드 추가
  };

  // SORTING
  const handleSortingSelect = (option) => {
    setSortingOption(option);
  };
  const handleBookmarkClick = (bookmark) => {
    console.log("Clicked bookmark:", bookmark);
    setSelectedBookmark(bookmark); // 클릭된 북마크 상태 저장
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
      <section>
        <h3>휴지통</h3>
        <div className="selected-tags"></div>

        <div className="sorting-options">
          <Dropdown
            className="sorting"
            options={sortingOpt}
            onSelect={handleSortingSelect}
          />
          <Dropdown
            className="sorting"
            options={sortingDirOpt}
            onSelect={handleSortingSelect}
          />
        </div>

        <ShowLinkCard
          bookmarks={bookmarks}
          onDelete={handleDelete}
          onEdit={handleEdit}
          sortingOption={sortingOption}
          onLinkCardClick={handleBookmarkClick} // 북마크 클릭 핸들러 전달
          sideMenuOpen={isMenuOpen}
          bookmarkDetailOpen={selectedBookmark}
        />
      </section>
      {selectedBookmark && (
        <div className="bookmark-detail-container">
          <BookmarkDetail
            bookmark={selectedBookmark}
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onClose={handleBookmarkClose}
          />
        </div>
      )}
    </div>
  );
};

export default RemovedItemsPage;
