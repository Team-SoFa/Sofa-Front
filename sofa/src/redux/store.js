// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import folderReducer from './reducers/folderReducer';
import memberReducer from './reducers/memberReducer'; // memberReducer를 가져옴

const rootReducer = combineReducers({
  auth: authReducer,  // 'auth'로 상태에 접근
  folder: folderReducer,
  member: memberReducer
});

const store = createStore(rootReducer);

export default store;
