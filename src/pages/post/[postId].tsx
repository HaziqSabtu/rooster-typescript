import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";

const PostDetail: FunctionComponent = () => {
    const { query, isReady } = useRouter();
    const { postId } = query;
    const [c, setC] = useState(0);
    // console.log("postId", postId);
    // console.log("query", query);

    const { data, refetch } = trpc.useQuery([
        "post.findPostById",
        { postId: postId as string },
    ]);

    console.log("data", data);
    console.log("fetching");

    useEffect(() => {
        console.log("list", data);
    }, [c]);

    const handleClick = () => {
        console.log("click");
        console.log("list");
        refetch();
        setC((c) => c + 1);
    };

    return isReady ? (
        data ? (
            <div>
                <h1>Post Detail Page {postId}</h1>
                <button
                    className='btn btn-primary'
                    onClick={() => {
                        console.log("clicking");
                        handleClick();
                    }}
                >
                    refetch
                </button>
            </div>
        ) : (
            <h1>Not Found</h1>
        )
    ) : (
        <h1>Loading</h1>
    );
};

export default PostDetail;
