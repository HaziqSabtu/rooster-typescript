import { getToken } from "./token";

const { accessToken, refreshToken } = getToken();

type data = {
    email: string;
    password: string;
};

export const createUserConfig = (data: data) => {
    return {
        method: "post",
        url: "/api/users",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
    };
};

export const getUserConfig = () => {
    return {
        method: "get",
        url: "/api/users",
        headers: {
            "x-refresh": refreshToken,
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    };
};

export const updateUserConfig = (data: data) => {
    return {
        method: "put",
        url: "/api/users/update",
        headers: {
            "x-refresh": refreshToken,
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
    };
};
