import React, { useRef, useState, useEffect } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import "./BookmarkDetail.css";
import LeftIcon from "../../assets/icon/LeftIcon";
import RightIcon from "../../assets/icon/RightIcon";
import RemindOnIcon from "../../assets/icon/RemindOnIcon";
import RemindOffIcon from "../../assets/icon/RemindOffIcon";
import TrashIcon from "../../assets/icon/TrashLineIcon";
import CloseIcon from "../../assets/icon/CloseIcon";
import DownIcon from "../../assets/icon/DownIcon";
import LinkIcon from "../../assets/icon/LinkIcon";
import TagAddIcon from "../../assets/icon/TagAddIcon";

const BookmarkDetail = ({ bookmark, bookmarks, isOpen, toggleDetail }) => {
  // 현재 북마크의 인덱스
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (!bookmark || !Array.isArray(bookmarks)) {
      return -1; // 초기 값으로 -1 설정
    }

    return bookmarks.findIndex((item) => item?.id === bookmark?.id);
  });
  const [isReminderActive, setIsReminderActive] = useState(false);
  const [linkcardImg, setLinkcardImg] = useState(""); //링크카드 대표이미지 변수
  // title
  const originalTitleRef = useRef("");
  const titleRef = useRef(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [title, setTitle] = useState(bookmark?.title || ""); //제목 관리
  // summary
  const [summary, setSummary] = useState("요약 내용입니다");
  const [isEditingSummary, setIsEditingSummary] = useState(false);
  // memo
  const [memo, setMemo] = useState("메모 내용입니다");
  const [isEditingMemo, setIsEditingMemo] = useState(false);

  // 예시 데이터 추가
  const [tagsOpt, setTagsOpt] = useState([
    { label: "Documents", content: "Documents" },
    { label: "Pictures", content: "Pictures" },
    { label: "PICTURES", content: "PICTURES" },
    { label: "오잉", content: "오잉" },
    { label: "웅", content: "웅" },
    {
      label: "모던웹을위한Javascript",
      content: "모던웹을위한Javascript+jQuery입문",
    },
    { label: "코스모스", content: "코스모스" },
    { label: "소년이온다", content: "소년이온다" },
    { label: "이것이자바다", content: "이것이자바다" },
  ]);
  const folderOpt = ["폴더1", "오렌지방구는누가꼈나", "어쩌구", "우와우"].map(
    (item) => ({
      label: item,
      content: item,
    })
  );

  // 북마크 업데이트 될 때마다의 동작
  //Id Update
  useEffect(() => {
    if (bookmarks.length > 0 && bookmark) {
      const index = bookmarks.findIndex((item) => item.id === bookmark.id);
      setCurrentIndex(index);
    }
  }, [bookmarks, bookmark]);
  // Title Update
  useEffect(() => {
    if (bookmark?.title) {
      setTitle(bookmark.title);
    }
  }, [bookmark]);

  const icons = [
    { id: "left", Icon: LeftIcon },
    { id: "right", Icon: RightIcon },
    { id: "remind", Icon: isReminderActive ? RemindOnIcon : RemindOffIcon },
    { id: "trash", Icon: TrashIcon },
    { id: "close", Icon: CloseIcon },
  ];

  const handleIconClick = (id) => {
    switch (id) {
      case "left":
        if (currentIndex > 0) {
          const prevBookmark = bookmarks[currentIndex - 1];
          setCurrentIndex(currentIndex - 1);
          // 북마크 정보 업데이트
          setTitle(prevBookmark.title);
          setSummary(prevBookmark.summary);
          setMemo(prevBookmark.memo);
        } else {
          console.log("이전 북마크가 없습니다");
        }
        break;
      case "right":
        if (currentIndex < bookmarks.length - 1) {
          const nextBookmark = bookmarks[currentIndex + 1];
          setCurrentIndex(currentIndex + 1);
          // 북마크 정보 업데이트
          setTitle(nextBookmark.title);
          setSummary(nextBookmark.summary);
          setMemo(nextBookmark.memo);
        } else {
          console.log("다음 북마크가 없습니다");
        }
        break;
      case "remind":
        setIsReminderActive(!isReminderActive);
        // 여기에 토스트 알림 로직 추가
        console.log("Reminder toggled!");
        break;
      case "trash":
        if (currentIndex < bookmarks.length - 1) {
          const nextBookmark = bookmarks[currentIndex + 1];
          // 북마크 삭제 로직 추가 (북마크 리스트 업데이트 필요)
          console.log("Bookmark deleted:", bookmark.id);
          setCurrentIndex(currentIndex + 1);
        } else if (currentIndex > 0) {
          const prevBookmark = bookmarks[currentIndex - 1];
          console.log("Bookmark deleted:", bookmark.id);
          setCurrentIndex(currentIndex - 1);
        }
        break;
      case "close":
        toggleDetail();
        break;
      default:
        break;
    }
  };

  const handleLinkcardImg = () => {
    setLinkcardImg("example.png");
  };
  useEffect(() => {
    handleLinkcardImg(); // bookmark가 변경될 때마다 이미지 설정
  }, [bookmark]);

  const handleTagDelete = (tagToDelete) => {
    const updatedTags = tagsOpt.filter((tag) => tag.content !== tagToDelete); // content 기준으로 삭제
    setTagsOpt(updatedTags); // 상태 업데이트
  };

  // calc summary, memo container height
  const useDynamicHeight = (content) => {
    const containerRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState("auto");

    useEffect(() => {
      if (containerRef.current) {
        const contentHeight = containerRef.current.offsetHeight;
        const calculatedHeight = contentHeight;
        setContainerHeight(`${calculatedHeight}rem`);
      }
    }, [content]);

    return { containerRef, containerHeight };
  };
  // Summary와 Memo 각각 훅 호출
  const { containerRef: summaryRef, containerHeight: summaryHeight } =
    useDynamicHeight(summary);
  const { containerRef: memoRef, containerHeight: memoHeight } =
    useDynamicHeight(memo);

  //수정 모드 종료(저장)
  const saveTitle = () => {
    setIsEditingTitle(false);
  };
  const saveSummary = () => {
    setIsEditingSummary(false);
  };
  const saveMemo = () => {
    setIsEditingMemo(false);
  };

  // 제목/수정 클릭 시 원래 제목 저장
  const handleEditClick = () => {
    originalTitleRef.current = title; // 수정 전 제목을 ref에 저장
    setIsEditingTitle(true); // 수정 모드로 전환
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.focus();
        titleRef.current.setSelectionRange(
          titleRef.current.value.length,
          titleRef.current.value.length
        );
      }
    }, 0);
  };

  // 제목/취소 버튼 클릭 시 수정 전 제목으로 되돌리기
  const handleCancelClick = () => {
    setIsEditingTitle(false); // 수정 모드 종료
    setTitle(originalTitleRef.current); // 수정 전 제목으로 되돌리기
  };

  // 제목/완료 버튼 클릭 시 제목 저장
  const handleSaveClick = () => {
    setIsEditingTitle(false); // 수정 모드 종료
  };

  if (!bookmark) return null;

  return (
    <div className={`bookmark-detail ${isOpen ? "open" : ""}`}>
      <div className="header-btn-container">
        {icons.map(({ id, Icon }) => (
          <Button
            className="detail-header-btn"
            Icon={Icon}
            onClick={() => handleIconClick(id)}
          />
        ))}
      </div>

      <div className="detail-header">
        <img className="detail-image" src="example.png" alt={bookmark.title} />
        <div className="detail-info">
          <div className="row">
            <Button
              className="detail link-btn"
              Icon={LinkIcon}
              label="링크 바로가기"
              onClick={() =>
                window.open(bookmark.url, "_blank", "noopener noreferrer")
              }
            />
            <Dropdown
              className="detail folder"
              options={folderOpt}
              Icon={DownIcon}
              label="폴더선택"
            />
          </div>
          <div className="detail-title-container">
            {isEditingTitle ? (
              <textarea
                ref={titleRef}
                className="detail-text-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onInput={(e) => {
                  const target = e.target;
                  target.style.height = "4rem"; // 높이를 초기화
                  target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
                }}
                onBlur={saveTitle} // 입력 필드에서 포커스 해제 시 저장
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // 기본 동작 방지
                    saveTitle(); // 저장 처리
                  }
                }}
              />
            ) : (
              <span className="detail-title">{title}</span>
            )}
          </div>
          {isEditingTitle ? (
            <div className="detail-edit-buttons">
              <Button
                className="detail-cancel"
                label="취소"
                onClick={handleCancelClick} // 취소 버튼 클릭 시 원래 제목으로 되돌리기
              />
              <Button
                className="detail-save"
                label="완료"
                onClick={handleSaveClick} // 완료 버튼 클릭 시 저장 처리
              />
            </div>
          ) : (
            <Button
              className="detail-edit"
              label="수정"
              onClick={handleEditClick} // 수정 버튼 클릭 시 수정 모드로 전환
            />
          )}
        </div>
      </div>

      {/* 자동 요약 */}
      <div className="summary-container" style={{ height: summaryHeight }}>
        <p>자동 요약</p>
        <div className="detail-text-container">
          {isEditingSummary ? (
            <textarea
              ref={summaryRef}
              className="detail-text-input"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              onInput={(e) => {
                const target = e.target;
                target.style.height = "6rem"; // 높이를 초기화
                target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
              }}
              onBlur={saveSummary} // 입력 필드에서 포커스 해제 시 저장
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // 기본 동작 방지
                  saveSummary();
                }
              }}
            />
          ) : (
            <p className="detail-text">{summary}</p>
          )}
        </div>
        <Button
          className="detail-edit"
          label={isEditingSummary ? "완료" : "수정"}
          onClick={() => {
            if (isEditingSummary) {
              setIsEditingSummary(false); // 완료 버튼 클릭 시 수정 완료
            } else {
              setIsEditingSummary(true); // 수정 버튼 클릭 시 수정 모드로 전환
              setTimeout(() => {
                // setTimeout을 사용하여 렌더링 후 포커스를 설정
                if (summaryRef.current) {
                  summaryRef.current.focus();
                  summaryRef.current.setSelectionRange(
                    summaryRef.current.value.length,
                    summaryRef.current.value.length
                  );
                }
              }, 0);
            }
          }}
        />
      </div>

      {/* 메모 */}
      <div className="memo-container" style={{ height: memoHeight }}>
        <p>메모</p>
        <div className="detail-text-container">
          {isEditingMemo ? (
            <textarea
              ref={memoRef} // memoRef 연결
              className="detail-text-input"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              onInput={(e) => {
                const target = e.target;
                target.style.height = "6rem"; // 높이를 초기화
                target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
              }}
              onBlur={() => setIsEditingMemo(false)} // 포커스 해제 시 저장
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // 엔터키 기본 동작 방지
                  setIsEditingMemo(false); // 수정 완료 처리
                }
              }}
            />
          ) : (
            <p className="detail-text">{memo}</p>
          )}
        </div>
        <Button
          className="detail-edit"
          label={isEditingMemo ? "완료" : "수정"}
          onClick={() => {
            if (isEditingMemo) {
              setIsEditingMemo(false); // 완료 버튼 클릭 시 수정 완료
            } else {
              setIsEditingMemo(true); // 수정 버튼 클릭 시 수정 모드로 전환
              setTimeout(() => {
                // setTimeout을 사용하여 렌더링 후 포커스를 설정
                if (memoRef.current) {
                  memoRef.current.focus();
                  memoRef.current.setSelectionRange(
                    memoRef.current.value.length,
                    memoRef.current.value.length
                  );
                }
              }, 0);
            }
          }}
        />
      </div>

      <div className="detail-tags">
        <p>태그</p>
        <div className="tags-container">
          {tagsOpt.map((tag, index) => (
            <span key={index}>
              <Button
                className="tag"
                label={tag.label}
                option={tag} // 태그 정보를 option으로 전달
                onDelete={handleTagDelete} // 삭제 함수 전달
              />
            </span>
          ))}
          <Button className="add-tag-btn" Icon={TagAddIcon} />
        </div>
      </div>
    </div>
  );
};

export default BookmarkDetail;
