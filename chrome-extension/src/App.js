import logo from './logo.svg';
import './App.css';
import BookmarkDetail from './components/LinkCard/BookmarkDetail';
import { bookmarks } from './components/LinkCard/bookmarks';
import { useState } from 'react';
import "./styles/color.css";

function App() {
    const [isDetailOpen, setIsDetailOpen] = useState(false); //자세히보기메뉴 열림 상태
    const toggleDetail = () => {
      if (isDetailOpen) 
      setIsDetailOpen(!isDetailOpen);
      console.log('넌누구냐',bookmarks);
    };
  return (
    <div className='"show-detail"'>
      <BookmarkDetail
        bookmark={bookmarks[0]}
        bookmarks={bookmarks}
        isOpen={true}
        toggleDetail={toggleDetail}
    />
  </div>
  );
}

export default App;
