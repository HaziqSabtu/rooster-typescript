import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { trpc } from "../../utils/trpc";
import PostList from "./Post";
import TimeAgo from "javascript-time-ago";
import de from "javascript-time-ago/locale/de";
import en from "javascript-time-ago/locale/en";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../slices/sliceCurrentUser";
import LoaderPost, { LoaderPostGenerator } from "../Loader/LoaderPost";
interface Props {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    filter?: boolean;
}

const Posts: FunctionComponent<Props> = ({ count, setCount, filter }) => {
    const currentUser = useSelector(selectCurrentUser);
    const [loading, setLoading] = useState(false);
    const { data: list, refetch } = !filter
        ? trpc.useQuery(["post.findAll"])
        : trpc.useQuery([
              "post.findManyById",
              { followingIDs: currentUser?.followingIDs },
          ]);

    TimeAgo.setDefaultLocale(de.locale);
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo("en-US");

    useEffect(() => {
        (async () => {
            setLoading(true);
            await refetch();
            setLoading(false);
        })();
    }, [count]);

    const generatePost = list?.map((post) => {
        return (
            <PostList
                key={post.id}
                post={post}
                setCount={setCount}
                timeAgo={timeAgo}
            />
        );
    });

    return (
        <div className=' flex flex-col'>
            {loading ? <LoaderPostGenerator /> : <>{generatePost}</>}
        </div>
    );
};

export default Posts;
