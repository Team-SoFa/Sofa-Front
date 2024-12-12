import {tokenPost, tokenGet, tokenDel, tokenPut, post} from "./apiClient";

export const articleRecommendGet = async () => {
    try {
        const response = await tokenGet("/article/recommend", {}, {});
        return response;
    } catch (error) {
        console.error("articleRecommendGet failed", error);
    }
}