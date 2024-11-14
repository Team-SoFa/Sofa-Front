import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import SideMenu from "../components/SideMenu/SideMenu";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
// import Dropdown from "../components/Dropdown/Dropdown";
// import TextField from "../components/Textfield/Textfield";
// import LinkCardForm from "../components/LinkCard/LinkCardForm";
// import Tagcard from "../components/Tagcard/Tagcard";
// import Toggle from "../components/Toggle/Toggle";

import "../components/Layout/main-layout.css";

const HomePage = ({ bookmarks, onAddBookmark, onDeleteBookmark }) => {
  const [username, setUsername] = useState(""); //사용자 이름
  const [mostPopularTags, setMostPopularTags] = useState("");
  const [loading, setLoading] = useState(true); //로딩 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false); //사이드메뉴 열림 상태
  // const [sortingOption, setSortingOption] = useState("");
  // const [selectedTags, setSelectedTags] = useState([]);
  // const sortingOptions = ["최근 저장", "오래된 저장", "오름차순", "내림차순"];

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // USER INFO
        //const userResponse = await fetch("/api/user");
        //const userData = await userResponse.json();
        const userData = { nickname: "000" };
        setUsername(userData.nickname);

        // MOST_POPULAR_TAGS
        // const topTagsResponse = await fetch("/api/tags/top");
        // const topTagsData = await topTagsResponse.json();
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

  const handleDelete = (id) => onDeleteBookmark(id);
  const handleEdit = (id) => {
    //추후 수정 기능 코드 추가
  };
  const handleAddBookmark = (newBookmark) => {
    onAddBookmark(newBookmark);
  };

  // TAG
  // const handleTagSelect = (tag) => {
  //   if (!selectedTags.includes(tag)) {
  //     setSelectedTags([...selectedTags, tag]); //태그 추가
  //   }
  // };
  // const handleTagRemove = (tag) => {
  //   setSelectedTags(selectedTags.filter((t) => t !== tag)); //태그 제거
  // };

  // SORTING
  // const handleSortingSelect = (option) => {
  //   setSortingOption(option);
  // };

  //SideMenu Toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`homepage ${isMenuOpen ? "menu-open" : ""}`}>
      <Header toggleMenu={toggleMenu} />
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <h3>안녕하세요, {username}님!</h3>

      <div style={{ display: "flex", placeItems: "center" }}>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          {/* <Dropdown
            options={sortingOptions}
            type={"sorting"}
            onSelect={handleSortingSelect}
          /> */}
        </div>
      </div>
      <div className="link-set">
        <div className="_text">
          <p className="_title">{username}님께 추천하는 링크</p>
          <Link to="/homepage" className="more">
            더보기&gt;
          </Link>
        </div>
        <ShowLinkCard
          bookmarks={bookmarks}
          onDelete={handleDelete}
          onEdit={handleEdit}
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
          // sortingOption={sortingOption}
        />
      </div>
      <div className="link-set">
        <div className="_text">
          <p className="_title">
            {username}님의 최다 태그
            <Button label={mostPopularTags} className="tag" />를 포함한 링크
          </p>
          <Link to="/homepage" className="more">
            더보기&gt;
          </Link>
        </div>
        <ShowLinkCard
          bookmarks={bookmarks}
          onDelete={handleDelete}
          onEdit={handleEdit}
          // sortingOption={sortingOption}
        />
      </div>
    </div>
  );
};

export default HomePage;
