import React from "react";
import "./Button.css";
import CloseIcon from "../../assets/icon/CloseIcon";

const Button = ({
  className,
  Icon,
  label,
  imgSrc,
  imgAlt,
  option,
  onClick,
  onDelete,
  style
}) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} style={style}>
      <>
        {Icon && (
          <span className="btn-icon" aria-label={imgAlt || "button icon"}>
            <Icon />
          </span>
        )}
        {imgSrc && (
          <img
            className="btn-img"
            src={imgSrc}
            alt={imgAlt || "button image"}
          />
        )}
        {label && <span>{label}</span>}
        {onDelete && (
          <Button
            className="delete-btn"
            Icon={CloseIcon}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(option.content);
            }}
          />
        )}
      </>
    </button>
  );
};

export default Button;
