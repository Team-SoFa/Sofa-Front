import {tokenPost, tokenGet, tokenDel, tokenPut} from "./apiClient";

export const folderPost = async (headers) => {
    try {
      const response = await tokenPost("/folder", {}, { headers });
      return response;
    } catch (error) {
      console.error("folderPost failed:", error);
      throw error;
    }
  };
  
export const folderGet = async (headers) => {
  try {
    const response = await tokenGet("/folder", {}, { headers });
    return response;
  } catch (error) {
    console.error("folderPost failed:", error);
    throw error;
  }
};
  
export const folderDelete = async (headers, id) => {
  try {
    const response = await tokenDel("/folder/"+id, {}, { headers });
    return response;
  } catch (error) {
    console.error("folderPost failed:", error);
    throw error;
  }
};

export const folderPut = async (headers, id) => {
  try {
    const response = await tokenPut("/folder/"+id, {}, { headers });
    console.log(response);
    return response;
  } catch (error) {
    console.error("folderPost failed:", error);
    throw error;
  }
};
