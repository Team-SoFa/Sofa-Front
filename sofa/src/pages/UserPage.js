import React, { useState } from "react";
import Header from "../components/Layout/Header";
import TextField from "../components/Textfield/Textfield";
import BookmarkList from "../components/Bookmark/BookmarkList";
import BookmarkForm from "../components/Bookmark/BookmarkForm";
import Dropdown from "../components/Dropdown/Dropdown";
import Tagcard from "../components/Tagcard/Tagcard";
import Toggle from "../components/Toggle/Toggle";

const UserPage = () => {
  const TestBookmarks = [
    //그리드 보기 편하게 넣어둔 테스트 배열
    { title: "Google", url: "https://www.google.com" },
    {
      title: "(NAVER)URL은 짧은데 제목이 길어질 경우",
      url: "https://www.naver.com",
    },
    {
      title:
        "GitHub 이정도로 길어지지 않게 제한 두는 게 좋을 것 같지만 naver보다 더 길어진다면",
      url: "https://www.github.com",
    },
    { title: "Stack Overflow", url: "https://stackoverflow.com" },
    { title: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { title: "React", url: "https://reactjs.org" },
    { title: "YouTube", url: "https://www.youtube.com" },
    {
      title: "스택 프레임 이해하기",
      url: "https://velog.io/@hamham/%EC%8A%A4%ED%83%9D%ED%94%84%EB%A0%88%EC%9E%84-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0",
    },
    {
      title: "URL이 두줄인데 제목도 두줄까지 길어진다면",
      url: "https://www.kw.ac.kr/ko/life/notice.jsp?BoardMode=view&DUID=47837&tpage=1&searchKey=1&searchVal=&srCategoryId=",
    },
    { title: "제목이랍니다", url: "https://www.youtube.com" },
    { title: "키스오브라이프", url: "https://m.cafe.daum.net/KISSOFLIFE/_rec" },
    {
      title: "나의 ex..컬러버스<3",
      url: "https://www.mk.co.kr/news/it/10882354",
    },
    {
      title: "고슴도치의 가시는 털일까?",
      url: "https://m.blog.naver.com/dnjsifjqjd/221181323254",
    },
  ];

  const [bookmarks, setBookmarks] = useState(TestBookmarks);
  const handleAddBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, { ...newBookmark, id: Date.now() }]);
  };
  const folderOptions = ["Documents", "Pictures", "Music", "Videos"];
  const tagsOptions = [
    "Documents",
    "Pictures",
    "Music",
    "Videos",
    "태그어쩌구1",
  ];

  const [selectedTags, setSelectedTags] = useState([]); //선택된 태그 관리
  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]); //태그 추가
    }
  };

  const handleTagRemove = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag)); //태그 제거
  };

  return (
    <div className="userpage">
      <Header />
      <TextField />
      <h2>(폴더명)</h2>
      <div style={{ display: "flex", placeItems: "center" }}>
        <Dropdown options={folderOptions} type={"folder"} />
        <Dropdown
          options={tagsOptions}
          type={"tag"}
          onSelect={handleTagSelect}
        />
        <img
          style={{ marginRight: "6px" }}
          className="vergical-bar"
          width={"1.5rem"}
          height={"30rem"}
          src="example.png"
          alt="vertical-bar"
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {selectedTags.map((tag, index) => (
            <Tagcard
              key={index}
              tag={tag}
              onRemove={() => handleTagRemove(tag)}
            />
          ))}
        </div>
      </div>
      <BookmarkForm onSubmit={handleAddBookmark} />
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
};

export default UserPage;
