import React, { useState } from "react";
import "./Toggle.css";

function Toggle({ label }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="toggle">
      <p>{label}</p>
      <div
        onClick={handleToggle}
        className={`toggle-case ${isToggled ? "toggled" : ""}`}
      >
        <div className="toggle-circle" />
      </div>
    </div>
  );
}

export default Toggle;
