import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import TextField from "../Textfield/Textfield";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal"; // Modal 컴포넌트 import

import "./HeaderStyle.css";

const Header = ({ type, toggleMenu }) => {
  const location = useLocation();
  const alarmOptions = [
    { content: "3일 후 휴지통에서 n개의 링크들이 영원히 빛을 잃게 됩니다." },
    { content: "또 어떤 알람이 있을까요" },
    { content: "새로운 업데이트가 있습니다." },
    { content: "새로운 업데이트가 있습니다." },
    { content: "새로운 업데이트가 있습니다." },
    { content: "새로운 업데이트가 있습니다." },
  ].map((item) => ({
    ...item,
    img: "example.png",
  }));
  const folderOpt = ["폴더1", "폴더2", "폴더3"].map((item) => ({
    label: item,
    content: item,
  }));
  const tagsOpt = ["Documents", "Pictures", "Music", "태그어쩌구1"].map(
    (item) => ({
      label: item,
      content: item,
    })
  );

  const headerStyle =
    type === "ONBOARDING"
      ? { backgroundColor: "#F1F1F1", paddingTop: "1rem" }
      : {};
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  // 모달 열기 함수
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기 함수
  const closeModal = () => setIsModalOpen(false);

  // 검색 상태 관리
  const [searchValue, setSearchValue] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredSearches, setFilteredSearches] = useState([]);

  const searchRef = useRef(null); // 검색 필드 및 드롭다운을 감지하는 Ref
  const inputRef = useRef(null); // 입력 필드 참조

  // 초기 예시 데이터 설정
  useEffect(() => {
    const exampleSearches = ["React", "JavaScript", "Frontend", "CSS", "HTML"];
    setRecentSearches(exampleSearches);
    setFilteredSearches(exampleSearches);
  }, []);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false); // 외부 클릭 시 드롭다운 숨기기
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside); // 이벤트 정리
    };
  }, []);

  // 입력 필드 클릭 시 드롭다운 표시
  const handleTextClick = () => {
    setShowDropdown(true); // 입력 필드 클릭 시 드롭다운 표시
  };

  // 검색어 입력 시 처리
  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  
    const filtered = recentSearches.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
  
    setFilteredSearches(filtered);
    setShowDropdown(true);
  };

  // 검색어 선택 시 처리
  const handleSearchSelect = (search) => {
    setSearchValue(search); // 선택한 검색어를 입력 필드에 반영
    setShowDropdown(false); // 드롭다운 숨김
  
    // 커서를 검색어 끝으로 이동
    setTimeout(() => {
      if (inputRef.current) {
        const inputElement = inputRef.current;
        inputElement.setSelectionRange(search.length, search.length);
        inputElement.focus(); // 포커스 유지
      }
    }, 0);
  };  

  // 엔터 키 입력 시 검색 기록 추가
  const handleAddSearch = (event) => {
    if (event.key === "Enter" && searchValue.trim()) {
      const updatedSearches = [
        searchValue,
        ...recentSearches.filter((item) => item !== searchValue), // 중복 제거
      ].slice(0, 5); // 최근 검색어 5개 유지

      setRecentSearches(updatedSearches);
      setShowDropdown(false); // 드롭다운 숨김
      setSearchValue(""); // 입력창 초기화
    }
  };

  return (
    <header className="header" style={headerStyle}>
      {/* ========== LINK CARD PAGES ========== */}
      {location.pathname !== "/" && (
        <>
          <Button className="menu" onClick={toggleMenu} label="🔲" />
          <div className="searchers" ref={searchRef}> {/* Ref 추가 */}
          {/*className으로 tag말고 다른 게 들어가면 동작이 이상해서 일단 이거 넣음..*/}
            <Dropdown className="tag" options={folderOpt} label="폴더" />{" "}
            <Dropdown className="tag" options={tagsOpt} label="태그선택" />
            <div className="search-input-container">
              <TextField
                ref={inputRef}
                value={searchValue}
                onChange={handleSearchChange}
                onClick={handleTextClick}
                onKeyDown={handleAddSearch}
                placeholder="검색어를 입력하세요."
                className= "text-field"
              />
              {showDropdown && (
                <ul className="recent-search-dropdown">
                  {filteredSearches.map((search, index) => (
                    <li
                      key={index}
                      className="recent-search-item"
                      onClick={() => handleSearchSelect(search)}
                    >
                      {search}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Button label="검색" />
          </div>
          <div className="user_info">
            <Dropdown className="alarm" options={alarmOptions} label="알림" />
            <Button label="계정정보" />
          </div>
        </>
      )}

      {/* ========== Landing PAGE ========== */}
      {location.pathname === "/" && (
        <>
          <img
            className="logo"
            src="example.png"
            alt="logo"
            onClick={() => window.location.reload()}
          />
          <div className="buttons">
            <Button label="확장 프로그램 추가하기" />
            <Link to="/homepage">
              <Button label="[임시]홈P" />
            </Link>
            <Link to="/signpage">
              <Button label="[임시]SignP" />
            </Link>
            {/* 모달 열기 버튼 */}
            <button className="header-btn" onClick={openModal}>
              [임시]Modal
            </button>
          </div>
        </>
      )}

      {/* Modal 컴포넌트 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 style={{ marginBottom: "1rem " }}>Example for Modal</h2>
        <p>모달 내용입니다.</p>
        <p>모</p>
        <p>달</p>
      </Modal>
    </header>
  );
};

export default Header;
