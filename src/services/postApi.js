import { getToken } from "./token";

const { accessToken, refreshToken } = getToken();

export const createNewPost = (data) => {
    return {
        method: "post",
        url: "/api/posts",
        headers: {
            "x-refresh": refreshToken,
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
    };
};

export const getAllPosts = () => {
    return {
        method: "post",
        url: "/api/getallpost",
        headers: {
            "x-refresh": refreshToken,
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    };
};
