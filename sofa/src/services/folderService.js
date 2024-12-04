import {tokenPost, tokenGet, tokenDel, tokenPut, post} from "./apiClient";
  
// 전체 폴더 목록 조회
export const folderGet = async (params) => {
  try {
    const response = await tokenGet("/folder", params, {});
    return response;
  } catch (error) {
    console.error("folderPost failed:", error);
    throw error;
  }
};

// 폴더 추가
export const folderPost = async (data) => {
  try {
    console.log("folderPost", data);

    const response = await tokenPost("/folder", data, {});
    return response;
  } catch (error) {
    console.error("folderPost failed:", error);
    throw error;
  }
};
  
// 폴더 삭제
export const folderDelete = async (headers, id) => {
  try {
    const response = await tokenDel("/folder/"+id, { headers });
    return response;
  } catch (error) {
    console.error("folderPost failed:", error);
    throw error;
  }
};

// 폴더 수정
export const folderPut = async (data, id) => {
  try {
    const response = await tokenPut("/folder/"+id, data);
    console.log(response);
    return response;
  } catch (error) {
    console.error("folderPost failed:", error);
    throw error;
  }
};
