import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import Dropdown from "../components/Dropdown/Dropdown";

import "../components/Layout/main-layout.css";

const RemovedItemsPage = ({ bookmarks, onAddBookmark, onDeleteBookmark }) => {
  const [loading, setLoading] = useState(true); //로딩 상태
  const [sortingOption, setSortingOption] = useState("");
  // const [selectedTags, setSelectedTags] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className={`main-page ${isMenuOpen ? "menu-open" : ""}`}>
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
        />
      </section>
    </div>
  );
};

export default RemovedItemsPage;
