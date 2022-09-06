import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { trpc } from "../../utils/trpc";
import PostList from "./Post";
import { User } from "next-auth";
import TimeAgo from "javascript-time-ago";
import de from "javascript-time-ago/locale/de";
import en from "javascript-time-ago/locale/en";
interface Props {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    user: User;
}

const Posts: FunctionComponent<Props> = ({ count, setCount, user }) => {
    const [loading, setLoading] = useState(false);
    const { data: list, refetch } = trpc.useQuery(["post.findAll"]);

    TimeAgo.setDefaultLocale(de.locale);
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo("en-US");

    useEffect(() => {
        (async () => {
            setLoading(true);
            refetch();
            setLoading(false);
        })();
    }, [count]);

    console.log(list);

    const generatePost = list?.map((post) => {
        return (
            <PostList
                key={post.id}
                post={post}
                setCount={setCount}
                currentUser={user}
                timeAgo={timeAgo}
            />
        );
    });

    return (
        <div className=' flex flex-col'>
            {loading ? "Loading" : <>{generatePost}</>}
        </div>
    );
};

export default Posts;
