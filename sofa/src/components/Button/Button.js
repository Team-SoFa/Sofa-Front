import React from "react";
import "./Button.css";

const Button = ({ label, onClick, className, imgSrc, imgAlt }) => {
  const isMenuButton = className?.includes("img");

  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {isMenuButton ? (
        // menu 버튼일 때: 이미지만 렌더링
        imgSrc && (
          <img
            className={`btn-img ${className}`}
            src={imgSrc}
            alt={imgAlt || "button image"}
          />
        )
      ) : (
        // 일반 버튼일 때: 이미지와 텍스트 렌더링
        <>
          {imgSrc && (
            <img
              className="btn-img"
              src={imgSrc}
              alt={imgAlt || "button image"}
            />
          )}
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
