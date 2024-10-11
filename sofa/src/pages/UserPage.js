import React, { useState } from "react";
import Header from "../components/Layout/Header";
import TextField from "../components/textfield/textfield";
import Dropdown from "../components/Dropdown/Dropdown";
import BookmarkList from "../components/Bookmark/BookmarkList";

const UserPage = () => {
  return (
    <div className="userpage">
      <Header />
      <TextField />
      <h2>어쩌고폴더</h2>
      <Dropdown />
      <Dropdown />
    </div>
  );
};

export default UserPage;
