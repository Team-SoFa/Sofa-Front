import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";
import Accordion from "../Accordion/Accordion";
import Dropdown from "../Dropdown/Dropdown";

const SideMenu = ({ isOpen, toggleMenu }) => {
  const tagsOpt = ["Documents", "Pictures", "Music", "태그어쩌구1"].map(
    (item) => ({
      label: item,
      content: item,
    })
  );

  const folderEdit = [
    { img: "example.png", content: "폴더 이름 수정" },
    { img: "example.png", content: "폴더 삭제" },
  ].map((item) => ({
    ...item,
  }));

  return (
    <div>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <Link to="/homepage" className="home">
          <img className="icon" src="example.png" alt="icon" />
          <p>홈</p>
        </Link>
        <div className="folder">
          <Accordion
            type="SIDE_MENU"
            title="폴더"
            content={
              <>
                <Link to="/folderpage" className="folder-item">
                  폴더 1
                </Link>
                <Link to="/folder2" className="folder-item">
                  폴더 2
                </Link>
                <Link to="/folder3" className="folder-item">
                  폴더 3
                </Link>
              </>
            }
          />
        </div>
        <Link to="/remindpage" className="reminditems">
          <img className="icon" src="example.png" alt="icon" />
          <p>리마인드함</p>
        </Link>
        <Link to="/removeditemspage" className="removeditems">
          <img className="icon" src="example.png" alt="icon" />
          <p>휴지통</p>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
