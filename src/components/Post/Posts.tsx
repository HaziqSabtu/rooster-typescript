import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import { getAllPosts } from "../../services/postApi";
import { trpc } from "../../utils/trpc";
import PostList from "./Post";
import { Post, User } from "@prisma/client";
interface Props {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Posts: FunctionComponent<Props> = ({ count, setCount }) => {
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState([]);
    const { data: list, refetch } = trpc.useQuery(["post.findAll"]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            refetch();
            setLoading(false);
        })();
    }, [count]);

    console.log(list);

    const generatePost = list?.map((post) => {
        return <PostList key={post.id} post={post} setCount={setCount} />;
    });

    return (
        <div className='mt-3 flex flex-col'>
            {loading ? "Loading" : <>{generatePost}</>}
        </div>
    );
};

export default Posts;
