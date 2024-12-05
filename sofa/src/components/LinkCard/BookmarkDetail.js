import React, { useRef, useState, useEffect } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import "./BookmarkDetail.css";
import LeftIcon from "../../assets/icon/LeftIcon";
import RightIcon from "../../assets/icon/RightIcon";
import RemindOffIcon from "../../assets/icon/RemindOffIcon";
import TrashIcon from "../../assets/icon/TrashLineIcon";
import CloseIcon from "../../assets/icon/CloseIcon";
import DownIcon from "../../assets/icon/DownIcon";
import LinkIcon from "../../assets/icon/LinkIcon";
import TagIcon from "../../assets/icon/TagAddIcon";
import TagAddIcon from "../../assets/icon/TagAddIcon";

const BookmarkDetail = ({ bookmark, isOpen, toggleDetail }) => {
  const [linkcardImg, setLinkcardImg] = useState(""); //링크카드 대표이미지 변수
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  // title
  const [title, setTitle] = useState(bookmark?.title || ""); //제목 관리
  const titleRef = useRef(null);
  // summary
  const [summary, setSummary] = useState("요약 내용입니다");
  const [isEditingSummary, setIsEditingSummary] = useState(false);
  // memo
  const [memo, setMemo] = useState("메모 내용입니다");
  const [isEditingMemo, setIsEditingMemo] = useState(false);

  useEffect(() => {
    if (bookmark?.title) {
      setTitle(bookmark.title); // bookmark가 업데이트될 때 title도 업데이트
    }
  }, [bookmark]);
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

  const icons = [
    { Icon: LeftIcon, onClick: toggleDetail },
    { Icon: RightIcon, onClick: toggleDetail },
    { Icon: RemindOffIcon, onClick: toggleDetail },
    { Icon: TrashIcon, onClick: toggleDetail },
    { Icon: CloseIcon, onClick: toggleDetail },
  ];

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

  //저장 로직 함수
  const saveTitle = () => {
    setIsEditingTitle(false); // 수정 모드 종료
  };
  const saveSummary = () => {
    setIsEditingSummary(false); // 수정 모드 종료
  };
  const saveMemo = () => {
    setIsEditingMemo(false); // 수정 모드 종료
  };

  if (!bookmark) return null;
  return (
    <div className={`bookmark-detail ${isOpen ? "open" : ""}`}>
      <div className="header-btn-container">
        {icons.map((item, index) => (
          <Button
            key={index}
            className="detail-header-btn"
            Icon={item.Icon}
            onClick={item.onClick}
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
          <Button
            className="detail-edit"
            label={isEditingTitle ? "완료" : "수정"}
            onClick={() => {
              if (isEditingTitle) {
                setIsEditingTitle(false); // 완료 버튼 클릭 시 수정 완료
              } else {
                setIsEditingTitle(true); // 수정 버튼 클릭 시 수정 모드로 전환
                setTimeout(() => {
                  // setTimeout을 사용하여 렌더링 후 포커스를 설정
                  if (titleRef.current) {
                    titleRef.current.focus();
                    titleRef.current.setSelectionRange(
                      titleRef.current.value.length,
                      titleRef.current.value.length
                    );
                  }
                }, 0);
              }
            }}
          />
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
