export const createHealthConfig = () => {
    return {
        method: "get",
        url: "/healthcheck",
        headers: {
            Authorization: "Bearer",
        },
    };
};
