import { combineReducers, createStore } from "redux"; // Redux에서 combineReducers 가져오기
import authReducer from "./reducers/authReducer";
import folderReducer from "./reducers/folderReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  folder: folderReducer,
});

const store = createStore(rootReducer);

export default store;
