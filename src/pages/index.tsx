import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
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
            <h1>I AM HOME</h1>
            {isLoading ? (
                <Loading />
            ) : (
                <button onClick={() => signOut()}>SignOut</button>
            )}
        </div>
    );
    // return (
    //     <div>
    //         <Navbar />
    //         <h1>I AM HOME</h1>
    //         <button onClick={() => signOut()}>SignOut</button>
    //         {/* {isLoading ? "Loading..." : "not loading"}
    //         {data ? data.greeting : "not data"} */}
    //     </div>
    // );
};

export default Home;
