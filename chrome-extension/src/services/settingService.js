import {tokenPost, tokenGet, tokenDel, tokenPut, tokenPatch} from "./apiClient";

export const settingGet = async (headers) => {
    try {
      const response = await tokenGet("/setting", {}, { headers });
      return response;
    } catch (error) {
      console.error("settingGet failed:", error);
      throw error;
    }
};

export const settingPatch = async (headers) => {
    try {
      const response = await tokenPatch("/setting/alarm", {}, { headers });
      return response;
    } catch (error) {
      console.error("settingPatch failed:", error);
      throw error;
    }
};