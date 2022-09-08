import { useRouter } from "next/router";

export const handleError = (error: string) => {
    const router = useRouter();

    if (error === "UNAUTHORIZED") {
        router.push("/error/e401");
    } else if (error === "NOT_FOUND") {
        router.push("/error/e404");
    } else router.push("/error/e500");
};
