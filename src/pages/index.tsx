import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Main from "../components/Main/Main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import { trpc } from "../utils/trpc";
import { User } from "next-auth";

const Home: NextPage = () => {
    const router = useRouter();
    const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
    const { data: session, status } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(session?.user ? session.user : undefined);

    console.log(session);

    useEffect(() => {
        status === "loading"
            ? setIsLoading(true)
            : status === "authenticated"
            ? processAuth()
            : router.push("/login");
    });

    const processAuth = () => {
        setUser(session?.user);
        setIsLoading(false);
    };

    return (
        <div>
            <Navbar />
            {isLoading ? <Loading /> : <Main user={user as User} />}
        </div>
    );
};

export default Home;
