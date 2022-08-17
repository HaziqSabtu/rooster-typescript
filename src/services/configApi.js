import { getToken } from "./token";

const { accessToken, refreshToken } = getToken();

export const createSessionConfig = (data) => {
    return {
        method: "post",
        url: "/api/sessions",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
    };
};

export const getSessionConfig = () => {
    return {
        method: "get",
        url: "/api/sessions",
        headers: {
            "x-refresh": refreshToken,
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    };
};

export const deleteSessionConfig = () => {
    return {
        method: "delete",
        url: "/api/sessions",
        headers: {
            "x-refresh": refreshToken,
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    };
};
