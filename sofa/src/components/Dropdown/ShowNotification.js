import React, { useRef, useState } from "react";
import { OutsideClick } from "../OutsideClick";

import "./Dropdown.css";
import AlarmLineIcon from "../../assets/icon/AlarmLineIcon";
import AlarmFilledIcon from "../../assets/icon/AlarmFilledIcon";
import ThumbUpIcon from "../../assets/icon/ThumbUpIcon";
import RemindIcon from "../../assets/icon/RemindIcon";
import UpdateIcon from "../../assets/icon/UpdateIcon";
import Announcement from "../../assets/icon/Announcement";

const ShowNotification = ({ contents, onSelect = () => {} }) => {
  // 외부 클릭 close
  const showNotificationRef = useRef(null); //드롭다운 요소 참조를 위한 ref 생성
  const [isOpen, toggleDropdown] = OutsideClick(showNotificationRef, false); //OutsideClick 사용
  const [isHovered, setIsHovered] = useState(false); // hover 상태 관리

  const handleSelect = (value) => {
    onSelect(value); // 부모 컴포넌트로 선택한 값 전달
  };

  // type에 따라 Icon과 label 값 지정
  const getIconAndLabel = (type) => {
    switch (type) {
      case "remeind":
        return { icon: <RemindIcon />, label: "리마인드" };
      case "recomend":
        return { icon: <ThumbUpIcon />, label: "추천" };
      case "update":
        return { icon: <UpdateIcon />, label: "업데이트" };
      case "announcement":
        return { icon: <Announcement />, label: "공지사항" };
      default:
        return { icon: null, label: "기타 알림" };
    }
  };

  return (
    <div
      className="dropdown show-notification"
      ref={showNotificationRef} // 외부 클릭
      onMouseEnter={() => setIsHovered(true)} // hover 시작
      onMouseLeave={() => setIsHovered(false)} // hover 종료
      onClick={(e) => {
        // 상위 컴포넌트 클릭 방지
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      {/* HEADER >>>>>>>>>> */}
      <div
        className={`dropdown-header ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <span
          className={`dropdown-header-icon ${isOpen ? "rotated" : ""}`}
          aria-label="Icon"
        >
          {isHovered || isOpen ? <AlarmFilledIcon /> : <AlarmLineIcon />}
        </span>

        {contents?.some((content) => content.isNew) && ( // isNew 값이 true인 항목이 하나라도 있으면 배지 표시
          <span className="notification-badge"></span>
        )}
      </div>

      {/* DROPDOWN MENU >>>>>>>>>> */}
      {isOpen && (
        <div className="dropdown-menu">
          {contents.map((content, index) => {
            const { icon, label } = getIconAndLabel(content.type);
            return (
              <div
                className="dropdown-option"
                key={index}
                onClick={() => handleSelect(content)}
              >
                <div className="notification-option-header">
                  <div className="left">
                    {icon && <span className="notification-icon">{icon}</span>}
                    <h5 className="notification-label">{label}</h5>
                  </div>
                  <div className="right">
                    <span className="notification-date">{content.date}</span>
                    {content.isNew && (
                      <span className="notification-new"></span>
                    )}
                  </div>
                </div>
                <span className="notification-content">{content.content}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShowNotification;
