// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Router를 index.js에서 사용
import { Provider } from 'react-redux';  // 추가: Redux Provider 임포트
import store from './redux/store';  // Redux 스토어 불러오기
import App from './App';
import './styles/Typography/Typography.css';

// root에 Provider로 스토어 제공
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  {/* Redux store를 제공 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
