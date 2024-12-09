import {tokenPost, tokenGet, tokenDel, tokenPut, tokenPatch} from "./apiClient";

// 링크 카드 추가
export const linkCardPost = async (data) => {
    try {
        const response = await tokenPost("/linkCard", data, {});
        return response;
    } catch (error) {
        console.error("linkCardPost failed:", error);
        throw error;
    }
};

// 링크 카드 AI 정보 생성
export const linkCardAiPost = async (data) => {
    try {
        const response = await tokenPost("/linkCard/ai", data, {});
        return response;
    } catch (error) {
        console.error("linkCardPost failed:", error);
        throw error;
    }
};

// 링크 카드 태그 추가
export const linkCardTagPost = async (id, data) => {
    try {
        const response = await tokenPost("/linkCard/"+id+"/tag", data, {});
        return response;
    } catch (error) {
        console.error("linkCardTagPost failed:", error);
        throw error;
    }
};

// 링크 카드 태그 삭제
export const linkCardTagDelPost = async (id, tagId, tagType) => {
    try {
        const response = await tokenDel(
            "/linkCard/"+id+"/tag?"+
            "tagId="+tagId+
            "&tagType="+tagType, {}, {});
        return response;
    } catch (error) {
        console.error("linkCardTagDel failed:", error);
        throw error;
    }
};

// 링크 카드 방문
export const linkCardEnterPost = async (id) => {
    try {
        const response = await tokenPost("/linkCard/"+id+"/enter", {}, {});
        return response;
    } catch (error) {
        console.error("linkCardEnter failed:", error);
        throw error;
    }
};

// 링크 카드 휴지통 이동
export const linkCardDelete = async (id) => {
    try {
        console.log('id', id);
        const response = await tokenPost("/linkCard/"+id+"/delete", {}, {});
        return response;
    } catch (error) {
        console.error("linkCardDelete failed:", error);
        throw error;
    }
};

// 링크 카드 타이틀, 메모, 요약 수정
export const linkCardInfoPatch = async (id, data) => {
    try {
        const response = await tokenPatch("/linkCard/"+id+"/info", data, {});
        return response;
    } catch (error) {
        console.error("linkCardEnter failed:", error);
        throw error;
    }
};

// 링크 카드 폴더 변경
export const linkCardFolderPatch = async (id, data) => {
    try {
        const response = await tokenPatch("/linkCard/"+id+"/folder", data, {});
        return response;
    } catch (error) {
        console.error("linkCardFolderPatch failed:", error);
        throw error;
    }
};

// 링크 카드 조회
export const linkCardGet = async (id) => {
    try {
        const response = await tokenGet("/linkCard/"+id, {}, {});
        return response;
    } catch (error) {
        console.error("linkCardFolderPatch failed:", error);
        throw error;
    }
};

// 링크 카드 폴더 리스트 조회
export const linkCardFolderListGet = async (
    folderId,
    sortBy,
    sortOrder,
    lastId,
    limit
) => {
    try {
        const response = await tokenGet(
            "/linkCard/list/"+folderId+
            "?sortBy="+sortBy+
            "&sortOrder="+sortOrder+
            "&lastId="+lastId+
            "&limit="+limit,
        {}, {});
        return response;
    } catch (error) {
        console.error("linkCardListGet failed:", error);
        throw error;
    }
};

// 링크 카드 전체 리스트 조회
export const linkCardAllListGet = async (
    sortBy,
    sortOrder,
    lastId,
    limit
) => {
    try {
        const response = await tokenGet(
            "/linkCard/list"+
            "?sortBy="+sortBy+
            "&sortOrder="+sortOrder+
            "&lastId="+lastId+
            "&limit="+limit, 
            {}, {});
        return response;
    } catch (error) {
        console.error("linkCardListGet failed:", error);
        throw error;
    }
};