import {tokenPost, tokenGet, tokenDel, tokenPut} from "./apiClient";

// AI 관련 태그
// 태그 목록 조회
export const aiTagsAiGet = async () => {
    try {
        const response = await tokenGet("/tag");
        return response;
    } catch (error) {
        console.error("aiTagsAiGet failed:", error);
        throw error;
    }
};

// AI 태그 삭제
export const aiTagsDelete = async (tagId) => {
    try {
        const response = await tokenDel("/tag/"+tagId);
        return response;
    } catch (error) {
        console.error("aiTagsDelete failed:", error);
        throw error;
    }
};

// CUSTOM 관련 태그
export const customTagsGet = async () => {
    try {
        const response = await tokenGet("/custom-tag");
        return response;
    } catch (error) {
        console.error("customTagsAiGet failed:", error);
        throw error;
    }
};

export const customTagsPost = async (data) => {
    try {
        const response = await tokenPost("/custom-tag", data, {});
        
        return response;
    } catch (error) {
        console.error("customTagsPost failed:", error);
        throw error;
    }
};

export const customTagsDelete = async (id) => {
    try {
        const response = await tokenDel("/custom-tag/"+id, {}, {});
        return response;
    } catch (error) {
        console.error("customTagsDelete failed:", error);
        throw error;
    }
};

export const customTagsPut = async (id, data) => {
    try {
        const response = await tokenDel("/custom-tag/"+id, data, {});
        return response;
    } catch (error) {
        console.error("customTagsDelete failed:", error);
        throw error;
    }
};