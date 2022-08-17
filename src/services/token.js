import Cookies from "js-cookie";

export const setToken = ({ refreshToken, accessToken }) => {
    Cookies.set("refreshToken", refreshToken);
    Cookies.set("accessToken", accessToken);
};

export const setAccessToken = (accessToken) => {
    Cookies.set("accessToken", accessToken);
};

export const getToken = () => {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    return { accessToken, refreshToken };
};
