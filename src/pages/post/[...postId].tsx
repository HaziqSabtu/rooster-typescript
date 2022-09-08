import { Post, User } from "@prisma/client";
import { TRPCContext } from "@trpc/react/dist/declarations/src/internals/context";
import TimeAgo from "javascript-time-ago";
import de from "javascript-time-ago/locale/de.json";
import en from "javascript-time-ago/locale/en.json";
import { User as currentUser } from "next-auth";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommentSection from "../../components/Comment/CommentSection";
import Contentsection from "../../components/Content/Contentsection";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import { handleError } from "../../services/error";
import { selectCurrentUser } from "../../slices/sliceCurrentUser";
import { trpc } from "../../utils/trpc";

type IPost = Post & { user: User; comments: Comment & { user: User } };

const PostDetail: FunctionComponent = () => {
    const { query, isReady } = useRouter();
    const postId = query.postId ? query.postId[0] : "";
    const [count, setCount] = useState(0);
    const currentUser = useSelector(selectCurrentUser);
    const router = useRouter();

    TimeAgo.setDefaultLocale(de.locale);
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo("en-US");

    const handleError = (error: string) => {
        if (error === "UNAUTHORIZED") {
            router.push("/error/e401");
        } else if (error === "NOT_FOUND") {
            router.push("/error/e404");
        } else router.push("/error/e500");
    };

    const { data, refetch } = trpc.useQuery(
        ["post.findPostById", { postId: postId as string }],
        {
            onError: (err) =>
                err.message === "No Post found"
                    ? handleError("NOT_FOUND")
                    : handleError("SERVER_ERROR"),
        }
    );

    // add skeleton ui instead of loading
    if (!data) {
        return <Loading />;
    }

    const { comments, content, createdAt, user: postedBy } = data;

    return isReady ? (
        data ? (
            <div>
                <Navbar />
                <Contentsection
                    postedBy={postedBy}
                    content={content}
                    createdAt={createdAt}
                    setCount={setCount}
                    postId={postId as string}
                    timeago={timeAgo}
                />
                <CommentSection
                    comments={comments}
                    postId={postId as string}
                    setCount={setCount}
                />
            </div>
        ) : (
            <h1>Not Found</h1>
        )
    ) : (
        <h1>Loading</h1>
    );
};

export default PostDetail;
