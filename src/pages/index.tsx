import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Main from "../components/Main/Main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import { User } from "next-auth";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../slices/sliceCurrentUser";

const Home: NextPage = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        status === "loading"
            ? setIsLoading(true)
            : status === "authenticated"
            ? processAuth()
            : router.push("/auth/signin");
    });

    const processAuth = () => {
        dispatch(setCurrentUser(session?.user as User));
        setIsLoading(false);
        router.push("/home");
    };

    return <div>{isLoading ? <Loading /> : null}</div>;
};

export default Home;
