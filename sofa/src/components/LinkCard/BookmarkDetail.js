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
  //
  const titleRef = useRef(null);
  const [values, setValues] = useState({
    title: bookmark?.title || "",
    summary: bookmark?.summary || "요약 내용입니다",
    memo: bookmark?.memo || "메모 내용입니다",
  });
  const originalValuesRef = useRef({
    title: "",
    summary: "",
    memo: "",
  });
  const [isEditing, setIsEditing] = useState({
    title: false,
    summary: false,
    memo: false,
  });

  const [linkcardImg, setLinkcardImg] = useState(""); //링크카드 대표이미지 변수

  // 임시 데이터 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [isReminderActive, setIsReminderActive] = useState(false);
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
  ]);
  const folderOpt = ["폴더1", "오렌지방구는누가꼈나", "어쩌구", "우와우"].map(
    (item) => ({
      label: item,
      content: item,
    })
  );

  // Activates Updating Bookmark
  useEffect(() => {
    if (bookmarks.length > 0 && bookmark) {
      // Update ID
      const index = bookmarks.findIndex((item) => item.id === bookmark.id);
      setCurrentIndex(index);
      if (bookmark.img) {
        // Update Image
        setLinkcardImg(bookmark.img);
      } else {
        setLinkcardImg("example.png");
      }
      // Update Title, Summary, and Memo
      setValues({
        title: bookmark.title || "",
        summary: bookmark.summary || "요약 내용입니다.",
        memo: bookmark.memo || "메모 내용입니다.",
      });

      // Update editing state to false when bookmark is loaded
      setIsEditing({
        title: false,
        summary: false,
        memo: false,
      });
    }
  }, [bookmarks, bookmark]);

  // HEADER BTNS >>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
          setValues((prevValues) => ({
            ...prevValues,
            title: prevBookmark.title,
            summary: prevBookmark.summary,
            memo: prevBookmark.memo,
          }));
        } else {
          //❗알림 추가❗
        }
        break;
      case "right":
        if (currentIndex < bookmarks.length - 1) {
          const nextBookmark = bookmarks[currentIndex + 1];
          setCurrentIndex(currentIndex + 1);
          // 북마크 정보 업데이트
          setValues((nextValues) => ({
            ...nextValues,
            title: nextBookmark.title,
            summary: nextBookmark.summary,
            memo: nextBookmark.memo,
          }));
        } else {
          //❗알림 추가❗
        }
        break;
      case "remind":
        setIsReminderActive(!isReminderActive);
        break;
      case "trash":
        if (currentIndex < bookmarks.length - 1) {
          const nextBookmark = bookmarks[currentIndex + 1];
          // ❗북마크 삭제 로직 추가❗
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
  // <<<<<<<<<<<<<<<<<<<<<<<<<<< HEADER BTNS

  // [ TAGS ]
  const handleTagDelete = (tagToDelete) => {
    const updatedTags = tagsOpt.filter((tag) => tag.content !== tagToDelete); // content 기준으로 삭제
    setTagsOpt(updatedTags); // 상태 업데이트
  };

  // Summary, Memo 높이 동적 계산
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
  // 높이 저장용 SummaryRef, MemoRef
  const { containerRef: summaryRef, containerHeight: summaryHeight } =
    useDynamicHeight(values.summary);
  const { containerRef: memoRef, containerHeight: memoHeight } =
    useDynamicHeight(values.memo);

  // 텍스트 수정 관련 >>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //"수정"
  const handleEdit = (field) => {
    originalValuesRef.current[field] = values[field]; // 수정 전 값을 저장
    setIsEditing((prev) => ({ ...prev, [field]: true })); // 해당 필드만 수정 모드로 전환
    // focus 설정 (각각의 ref에 대해 focus 처리)
    setTimeout(() => {
      if (field === "title" && titleRef.current) {
        titleRef.current.focus();
        titleRef.current.setSelectionRange(
          titleRef.current.value.length,
          titleRef.current.value.length
        );
      } else if (field === "summary" && summaryRef.current) {
        summaryRef.current.focus();
        summaryRef.current.setSelectionRange(
          summaryRef.current.value.length,
          summaryRef.current.value.length
        );
      } else if (field === "memo" && memoRef.current) {
        memoRef.current.focus();
        memoRef.current.setSelectionRange(
          memoRef.current.value.length,
          memoRef.current.value.length
        );
      }
    }, 0);
  };

  // "완료"
  const handleSave = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: false })); // 수정 모드 종료
  };
  // "취소"
  const handleCancel = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: false })); // 수정 모드 종료
    setValues((prev) => ({
      ...prev,
      [field]: originalValuesRef.current[field],
    }));
  };
  // 각 필드에 대한 value 업데이트
  const handleChange = (e, field) => {
    setValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
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
              onSelect={() => {
                setValues("title");
                //❗추후 수정
              }}
            />
          </div>

          <div className="detail-title-container">
            {isEditing.title ? (
              <textarea
                ref={titleRef}
                className="detail-text-input"
                value={values.title}
                onChange={(e) => handleChange(e, "title")}
                onInput={(e) => {
                  const target = e.target;
                  target.style.height = "4rem"; // 높이를 초기화
                  target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
                }}
                onBlur={() => {
                  handleCancel("title");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // 기본 동작 방지
                    handleSave("title");
                  }
                }}
              />
            ) : (
              <span className="detail-title">{values.title}</span>
            )}
          </div>
          {isEditing.title ? (
            <div className="detail-edit-buttons">
              <Button
                className="detail-cancel"
                label="취소"
                onClick={() => handleCancel("title")}
              />
              <Button
                className="detail-save"
                label="완료"
                onClick={() => handleSave("title")}
              />
            </div>
          ) : (
            <Button
              className="detail-edit"
              label="수정"
              onClick={() => handleEdit("title")}
            />
          )}
        </div>
      </div>

      <div className="summary-container" style={{ height: summaryHeight }}>
        <p>자동 요약</p>
        <div className="detail-text-container">
          {isEditing.summary ? (
            <textarea
              ref={summaryRef}
              className="detail-text-input"
              value={values.summary}
              onChange={(e) => handleChange(e, "summary")}
              onInput={(e) => {
                const target = e.target;
                target.style.height = "6rem"; // 높이를 초기화
                target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
              }}
              onBlur={() => {
                handleCancel("summary");
              }} // 입력 필드에서 포커스 해제 시 저장
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // 기본 동작 방지
                  handleSave("summary");
                }
              }}
            />
          ) : (
            <p className="detail-text">{values.summary}</p>
          )}
        </div>

        {isEditing.summary ? (
          <div className="detail-edit-buttons">
            <Button
              className="detail-cancel"
              label="취소"
              onClick={() => handleCancel("summary")}
            />
            <Button
              className="detail-save"
              label="완료"
              onClick={() => handleSave("summary")}
            />
          </div>
        ) : (
          <Button
            className="detail-edit"
            label="수정"
            onClick={() => handleEdit("summary")}
          />
        )}
      </div>

      {/* 메모 */}
      <div className="memo-container" style={{ height: memoHeight }}>
        <p>메모</p>
        <div className="detail-text-container">
          {isEditing.memo ? (
            <textarea
              ref={memoRef}
              className="detail-text-input"
              value={values.memo}
              onChange={(e) => handleChange(e, "memo")}
              onInput={(e) => {
                const target = e.target;
                target.style.height = "6rem"; // 높이를 초기화
                target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
              }}
              onBlur={() => handleCancel("memo")} // 포커스 해제 시 저장
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // 엔터키 기본 동작 방지
                  handleSave("memo"); // 수정 완료 처리
                }
              }}
            />
          ) : (
            <p className="detail-text">{values.memo}</p>
          )}
        </div>
        {isEditing.memo ? (
          <div className="detail-edit-buttons">
            <Button
              className="detail-cancel"
              label="취소"
              onClick={() => handleCancel("memo")}
            />
            <Button
              className="detail-save"
              label="완료"
              onClick={() => handleSave("memo")}
            />
          </div>
        ) : (
          <Button
            className="detail-edit"
            label="수정"
            onClick={() => handleEdit("memo")}
          />
        )}
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
