import { NextPage } from "next";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading/Loading";
import FP from "../../components/Main/ForYouPage";
import { setCurrentUser } from "../../slices/sliceCurrentUser";

interface Props {}

const ForYouPage: NextPage = () => {
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

    return <div>{isLoading ? <Loading /> : <FP />}</div>;
};

export default ForYouPage;
