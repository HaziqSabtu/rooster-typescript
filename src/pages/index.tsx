import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Main from "../components/Main/Main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
    const router = useRouter();
    const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
    const { data: session, status } = useSession();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        status === "loading"
            ? setIsLoading(true)
            : status === "authenticated"
            ? setIsLoading(false)
            : router.push("/login");
    });

    return (
        <div>
            <Navbar />
            {isLoading ? (
                <Loading />
            ) : (
                <Main />
                // <h1>hoime</h1>
            )}
        </div>
    );
};

export default Home;
