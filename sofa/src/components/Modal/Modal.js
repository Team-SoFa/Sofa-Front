// initialSetting 값에 따라 출력할 컨텐츠를 switch로 구분함
// UserPage : Settings, customer-support, logout

import React, { useState, useRef } from "react";
import { OutsideClick } from "../OutsideClick";
import Button from "../Button/Button";
import Toggle from "../Toggle/Toggle"; // 필요한 추가 컴포넌트 임포트

import "./Modal.css";
import CloseIcon from "../../assets/icon/CloseIcon";
import SettingIcon from "../../assets/icon/SettingIcon";
import AlarmLineIcon from "../../assets/icon/AlarmLineIcon";
import ProfileFilledIcon from "../../assets/icon/ProfileFilledIcon";
import CancelLineIcon from "../../assets/icon/CancelLineIcon";
import CallLineIcon from "../../assets/icon/CallLineIcon";
import RadioButton from "../RadioButton/RadioButton";

const Modal = ({ isOpen, onClose, initialSetting }) => {
  const modalRef = useRef(null);
  const [isActive, setIsActive] = OutsideClick(modalRef, isOpen);
  const [activeSetting, setActiveSetting] = useState("account-info"); // 내부 상태 관리
  const userInfo = {
    email: "mg0454@gmail.com", // 임시 사용자 정보
  };

  // 외부 클릭 Close
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };
  // 초기화하며 모달 Close
  const handleClose = () => {
    setActiveSetting("account-info"); // activeSetting 초기화
    onClose();
  };
  // 탈퇴 사유
  const handleSelection = (value) => {
    console.log("Selected value:", value);
    //불만 사유 선택 정보 저장/넘기기
  };

  if (!isOpen) return null;

  const renderModalContent = () => {
    switch (initialSetting) {
      // UserPage >>>>>>>>>>
      case "settings":
        return (
          <div className="modal-container">
            <div className="modal-sidebar">
              <div className="modal-title">
                <SettingIcon />
                <h3>설정</h3>
              </div>
              <Button
                className="modal-side-menu"
                label="계정 정보"
                Icon={ProfileFilledIcon}
                onClick={() => setActiveSetting("account-info")}
              />
              <Button
                className="modal-side-menu"
                label="알림 설정"
                Icon={AlarmLineIcon}
                onClick={() => setActiveSetting("alarm-settings")}
              />
            </div>
            <div className="modal-content-container">
              {activeSetting === "account-info" && (
                <div>
                  <div className="modal-content">
                    <h4>이메일</h4>
                    <p>{userInfo.email}</p>
                  </div>
                  <div className="modal-content">
                    <h4>회원 탈퇴</h4>
                    <div className="text-button">
                      <p>
                        회원 탈퇴 후 저장한 정보 및 맞춤 서비스 이용기록은 모두
                        삭제됩니다.
                      </p>
                      <Button
                        className="modal-basic-btn"
                        Icon={CancelLineIcon}
                        label="회원 탈퇴"
                        onClick={() => setActiveSetting("withdrawal")}
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeSetting === "alarm-settings" && (
                <div>
                  <h4>이메일 알림</h4>
                  <div className="alarm-setting">
                    <Toggle label="전체" />
                  </div>
                  <div className="alarm-setting">
                    <Toggle label="리마인드함 알림" />
                    <Toggle label="추천 링크 알림" />
                    <Toggle label="서비스 공지사항 및 업데이트 안내" />
                  </div>
                </div>
              )}
              {activeSetting === "withdrawal" && (
                <div>
                  <h3>회원 탈퇴</h3>
                  <p>링카이빙에 아껴주신 시간에 감사드립니다.</p>
                  <p>고객님이 느끼셨던 점을 공유해주시면</p>
                  <p>더욱 건강한 서비스를 제공할 수 있도록 하겠습니다.</p>
                  <RadioButton
                    options={[
                      {
                        label: "잘 이용하지 않아요.",
                        value: "unuseful",
                      },
                      {
                        label: "이용 방법이 어려워요.",
                        value: "difficult",
                      },
                      {
                        label: "AI 성능이 좋지 않아요.",
                        value: "AI",
                      },
                      {
                        label: "오류가 자주 발생해요.",
                        value: "error",
                      },
                      {
                        label: "다른 서비스가 더 좋아요.",
                        value: "other-service",
                      },
                      {
                        label: "기타",
                        value: "other",
                      },
                    ]}
                    onChange={handleSelection}
                  />
                  <div className="modal-btn-container">
                    <Button
                      label="취소"
                      onClick={() => setActiveSetting("account-info")}
                    />
                    <Button
                      label="탈퇴"
                      onClick={() => setActiveSetting("withdraw-complete")}
                    />
                  </div>
                </div>
              )}
              {activeSetting === "withdraw-complete" && (
                <div>
                  <h3>회원 탈퇴</h3>
                  <div className="text-button">
                    <p style={{ marginBlock: "1rem" }}>
                      탈퇴가 완료되었습니다. 소중한 의견 감사드립니다.
                    </p>
                    <Button label="확인" onClick={onClose} />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case "customer-support":
        return (
          <div className="modal-container">
            <div className="modal-sidebar">
              <div className="modal-title">
                <CallLineIcon />
                <h3>고객 센터</h3>
              </div>
            </div>
            <div className="modal-content-container">
              <div className="modal-content">
                <h4>문의하기</h4>
                <div className="text-button">
                  <p>서비스 이용 중 문의사항 발생 시, 다음으로 문의해주세요.</p>
                  <Button className="modal-basic-btn" label="피드백 보내기" />
                </div>
              </div>
              <div className="modal-content">
                <h4>피드백 보내기</h4>
                <div className="text-button">
                  <p>피드백을 보내보세요! 링카이빙에게 큰 힘이 됩니다.</p>
                  <Button className="modal-basic-btn" label="피드백 보내기" />
                </div>
              </div>
            </div>
          </div>
        );
      case "logout":
        return (
          <div className="modal-container" style={{ padding: "3rem" }}>
            <p>로그아웃하시겠습니까?</p>
            <Button className="modal-basic-btn" label="확인" />
          </div>
        );
      // <<<<<<<<<< UserPage
      default:
        return <div>알 수 없는 작업입니다.</div>;
    }
  };

  return (
    <div className="modal-overlay" ref={modalRef} onClick={handleOverlayClick}>
      <div className="modal">
        {renderModalContent()}
        <Button
          className="modal-close"
          onClick={handleClose}
          Icon={CloseIcon}
        />
      </div>
    </div>
  );
};

export default Modal;
