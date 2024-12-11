import { useEffect, useState } from "react";

let activeDropdown = null; // 현재 열려 있는 드롭다운 참조

export const OutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      // 드롭다운이 열려 있고, 현재 클릭한 요소가 드롭다운 내부가 아닌 경우
      if (
        el.current &&
        !el.current.contains(e.target) &&
        activeDropdown === el.current
      ) {
        setIsActive(false); // 닫기
        activeDropdown = null; // 활성화된 드롭다운 초기화
      }
    };

    if (isActive) {
      activeDropdown = el.current; // 현재 활성화된 드롭다운 설정
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
      if (activeDropdown === el.current) {
        activeDropdown = null; // 드롭다운이 닫힐 때 초기화
      }
    };
  }, [isActive, el]);

  const handleDropdownToggle = () => {
    if (isActive) {
      setIsActive(false); // 현재 드롭다운 닫기
      activeDropdown = null;
    } else {
      if (activeDropdown && activeDropdown !== el.current) {
        // 다른 드롭다운이 열려 있는 경우 닫기
        activeDropdown.dispatchEvent(new CustomEvent("closeDropdown"));
      }
      setIsActive(true); // 현재 드롭다운 열기
      activeDropdown = el.current; // 활성화된 드롭다운 갱신
    }
  };

  useEffect(() => {
    const closeHandler = () => setIsActive(false);

    if (el.current) {
      el.current.addEventListener("closeDropdown", closeHandler);
    }

    return () => {
      if (el.current) {
        el.current.removeEventListener("closeDropdown", closeHandler);
      }
    };
  }, [el]);

  return [isActive, handleDropdownToggle];
};
