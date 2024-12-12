import { combineReducers } from 'redux';
import authReducer from './authReducer';
import folderReducer from "./folderReducer"; // 폴더 리듀서 임포트
import memberReducer from './memberReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  folder: folderReducer, // 폴더 상태 관리
  member: memberReducer
});

export default rootReducer;
