import React from "react";

const Tagcard = ({ tag, onRemove }) => {
  return (
    <div className="tag-card">
      <span>{tag}</span>
      <button onClick={onRemove} className="remove-btn">
        x
      </button>
    </div>
  );
};

export default Tagcard;
