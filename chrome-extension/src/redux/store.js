// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import folderReducer from './reducers/folderReducer';

const rootReducer = combineReducers({
  auth: authReducer,  // 'auth'로 상태에 접근
  folder: folderReducer
});

const store = createStore(rootReducer);

export default store;
