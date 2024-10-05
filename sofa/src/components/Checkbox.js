import React, { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false); // 체크박스 상태

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        content
      </label>
    </div>
  );
};

export default Checkbox;
