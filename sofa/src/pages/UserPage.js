import React, { useState } from "react";
import Header from "../components/Layout/Header";
import TextField from "../components/Textfield/Textfield";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import LinkCardForm from "../components/LinkCard/LinkCardForm";
import Dropdown from "../components/Dropdown/Dropdown";
import Tagcard from "../components/Tagcard/Tagcard";
import Toggle from "../components/Toggle/Toggle";
import { bookmarks as datas } from "../components/LinkCard/bookmarks";

const UserPage = () => {
  const [bookmarks, setBookmarks] = useState(datas);
  const handleDelete = (id) =>
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  const handleEdit = (id) => {
    //추후 ㅅ수정 기능 코드 추가
  };

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
      <LinkCardForm onSubmit={handleAddBookmark} />
      <ShowLinkCard
        bookmarks={bookmarks}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default UserPage;
