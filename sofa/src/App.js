import React, { useState, useEffect } from "react";
import Spinner from "./components/Spinner"; // 스피너 컴포넌트 import

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // 3초 후 로딩 종료
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner /> // 로딩 중이면 스피너 보여줌
      ) : (
        <h1>로딩 완료!</h1> // 로딩이 끝나면 다른 내용 보여줌
      )}
    </div>
  );
};

export default App;
