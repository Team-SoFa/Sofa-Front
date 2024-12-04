// src/redux/reducers/folderReducer.js

const initialState = {
    folderList: [],
  };
  
  const folderReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FOLDER_LIST":
        return {
          ...state,
          folderList: action.payload, // 서버에서 받은 폴더 목록으로 갱신
        };
      case "UPDATE_FOLDER_NAME":
        return {
          ...state,
          folderList: state.folderList.map((folder) =>
            folder.id === action.payload.id
              ? { ...folder, name: action.payload.name }
              : folder
          ),
        };
      default:
        return state;
    }
  };
  
  export default folderReducer;
  