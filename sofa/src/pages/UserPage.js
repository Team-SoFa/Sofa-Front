import React, { useState } from "react";
import Header from "../components/Layout/Header";
import TextField from "../components/Textfield/Textfield";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import LinkCardForm from "../components/LinkCard/LinkCardForm";
import Dropdown from "../components/Dropdown/Dropdown";
import Tagcard from "../components/Tagcard/Tagcard";
import Toggle from "../components/Toggle/Toggle";

const UserPage = ({ bookmarks, onAddBookmark, onDeleteBookmark }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortingOption, setSortingOption] = useState("");

  const folderOptions = ["Documents", "Pictures", "Music", "Videos"];
  const tagsOptions = ["Documents", "Pictures", "Music", "태그어쩌구1"];
  const sortingOptions = ["최근 저장", "오래된 저장", "오름차순", "내림차순"];

  const handleDelete = (id) => onDeleteBookmark(id);
  const handleEdit = (id) => {
    //추후 수정 기능 코드 추가
  };
  const handleAddBookmark = (newBookmark) => {
    onAddBookmark(newBookmark);
  };

  // TAG
  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]); //태그 추가
    }
  };
  const handleTagRemove = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag)); //태그 제거
  };

  // SORTING
  const handleSortingSelect = (option) => {
    setSortingOption(option);
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
          className="vergical-bar"
          style={{ marginRight: "6px" }}
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
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Dropdown
            options={sortingOptions}
            type={"sorting"}
            onSelect={handleSortingSelect}
          />
        </div>
      </div>
      <LinkCardForm onSubmit={handleAddBookmark} />
      <ShowLinkCard
        bookmarks={bookmarks}
        onDelete={handleDelete}
        onEdit={handleEdit}
        sortingOption={sortingOption}
      />
    </div>
  );
};

export default UserPage;
