// src/redux/actions/folderActions.js

export const setFolderList = (folderList) => {
    return {
      type: "SET_FOLDER_LIST",
      payload: folderList, // 서버에서 받은 폴더 목록을 payload로 전달
    };
  };
  
  export const updateFolderName = (id, name) => {
    return {
      type: "UPDATE_FOLDER_NAME",
      payload: { id, name }, // 폴더 id와 갱신할 이름을 전달
    };
  };