import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { trpc } from "../../utils/trpc";
import PostList from "./Post";
import { User } from "next-auth";

interface Props {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    user: User;
}

const Posts: FunctionComponent<Props> = ({ count, setCount, user }) => {
    const [loading, setLoading] = useState(false);
    const { data: list, refetch } = trpc.useQuery(["post.findAll"]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            refetch();
            setLoading(false);
        })();
    }, [count]);

    console.log(list);
    console.log(user);

    const generatePost = list?.map((post) => {
        return (
            <PostList
                key={post.id}
                post={post}
                setCount={setCount}
                currentUser={user}
            />
        );
    });

    return (
        <div className='mt-3 flex flex-col'>
            {loading ? "Loading" : <>{generatePost}</>}
        </div>
    );
};

export default Posts;
