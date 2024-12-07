// detail - summary, memo text container 높이 계산
import { useRef, useEffect, useState } from "react";

function useDynamicHeight(content) {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState("auto");

  useEffect(() => {
    if (containerRef.current) {
      const contentHeight = containerRef.current.offsetHeight;
      const calculatedHeight = contentHeight + 100; // 필요에 따라 여백 추가
      setContainerHeight(`${calculatedHeight}px`);
    }
  }, [content]);

  return { containerRef, containerHeight };
}
