import {tokenPost, tokenGet, tokenDel, tokenPut} from "./apiClient";

// 검색
export const searchGet = async (folderId, tagsId, keyword, lastId, limit, sortBy, sortOrder) => {
    try {
        const response = await tokenGet("/search?"+
            "?folderId="+folderId+
            tagsId+
            "&lastId="+lastId+
            "&limit="+limit+ 
            "&sortBy="+sortBy+
            "&sortOrder="+sortOrder,
        {}, {});
        return response;
    } catch (error) {
        console.error("tagGet failed:", error);
        throw error;
    }
};

// 검색 tags
export const searchTagsGet = async (keyword) => {
    try {
        const response = await tokenGet("/search/tags?keyword="+keyword, {}, {});
        return response;
    } catch (error) {
        console.error("searchTagsGet failed:", error);
        throw error;
    }
};

// 검색 최근 tags
export const searchHistoryTagsGet = async (keyword) => {
    try {
        const response = await tokenGet("/search/history/tags", {}, {});
        return response;
    } catch (error) {
        console.error("searchTagsGet failed:", error);
        throw error;
    }
};

// 검색 최근 keywords
export const searchHistoryKeywordsGet = async (keyword) => {
    try {
        const response = await tokenGet("/search/history/keywords", {}, {});
        return response;
    } catch (error) {
        console.error("searchTagsGet failed:", error);
        throw error;
    }
};