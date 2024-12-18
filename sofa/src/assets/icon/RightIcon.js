import React from "react";

const RightIcon = ({ style }) => {
  return (
    <svg
      style={style} // 전달된 스타일 적용
      width="1.5rem"
      height="1.5rem"
      viewBox="0 -2 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.13683 19.0517C7.62515 18.5357 7.6247 17.7038 8.13582 17.1873L13.2689 12L8.13582 6.81267C7.6247 6.29616 7.62515 5.46429 8.13683 4.94833V4.94833C8.65497 4.42587 9.49965 4.42587 10.0178 4.94833L16.6388 11.6247C16.8449 11.8325 16.8449 12.1675 16.6388 12.3753L10.0178 19.0517C9.49965 19.5741 8.65497 19.5741 8.13683 19.0517V19.0517Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RightIcon;
