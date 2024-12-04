import {tokenPost, tokenGet, tokenDel, tokenPut} from "./apiClient";

export const linkCardPost = async (headers) => {
    try {
        const response = await tokenPost("/linkCard", {}, { headers });
        return response;
    } catch (error) {
        console.error("linkCardPost failed:", error);
        throw error;
    }
};