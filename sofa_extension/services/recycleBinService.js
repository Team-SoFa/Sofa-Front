import {tokenPost, tokenGet, tokenDel, tokenPut} from "./apiClient";

// 복원
export const recycleBinPost = async (id, data) => {
    try {  
      const response = await tokenPost("/recycleBin/"+id, data, {});

      console.log(data);
      return response;
    } catch (error) {
      console.error("recycleBinPost failed:", error);
      throw error;
    }
};

// 영구 삭제
export const recycleBinDel = async (id) => {
  try {  
    const response = await tokenDel("/recycleBin/"+id, {}, {});

    return response;
  } catch (error) {
    console.error("recycleBinDel failed:", error);
    throw error;
  }
};

// 휴지통 링크 카드 목록 조회
export const recycleBinGet = async (
  sortBy,
  sortOrder,
  lastId,
  limit
) => {
  try {
      const response = await tokenGet(
          "/recycleBin"+
          "?sortBy="+sortBy+
          "&sortOrder="+sortOrder+
          "&lastId="+lastId+
          "&limit="+limit, 
          {}, {});
      return response;
  } catch (error) {
      console.error("recycleBinGet failed:", error);
      throw error;
  }
};