import { getToken } from "./token";

const { accessToken, refreshToken } = getToken();

export const createCommentConfig = (data) => {
    return {
        method: "post",
        url: "/api/comments",
        headers: {
            "x-refresh": refreshToken,
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
    };
};
