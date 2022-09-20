import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "next-auth";
import { useDispatch } from "react-redux";
import Homee from "../../components/Home";
import { setCurrentUser } from "../../slices/sliceCurrentUser";
import Loading from "../../components/Loading/Loading";

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
        console.log("session", session);
        dispatch(setCurrentUser(session?.user as User));
        setIsLoading(false);
    };

    return <div>{isLoading ? <Loading /> : <Homee />}</div>;
};

export default Home;
