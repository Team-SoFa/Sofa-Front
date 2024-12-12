import {tokenPost, tokenGet, tokenDel, tokenPut, tokenPatch} from "./apiClient";

// 태그 목록 조회
export const remindGet = async () => {
    try {
        const response = await tokenGet("/remind?lastId="+lastId+
            "&limit="+limit+
            "&sortBy="+sortBy+
            "&sortOrder"+sortOrder
        );
        return response;
    } catch (error) {
        console.error("tagGet failed:", error);
        throw error;
    }
};
