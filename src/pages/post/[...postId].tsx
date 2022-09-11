import { Post, User } from "@prisma/client";
import { TRPCContext } from "@trpc/react/dist/declarations/src/internals/context";
import TimeAgo from "javascript-time-ago";
import de from "javascript-time-ago/locale/de.json";
import en from "javascript-time-ago/locale/en.json";
import { User as currentUser } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentSection from "../../components/Comment/CommentSection";
import Contentsection from "../../components/Content/Contentsection";
import { HeadPages } from "../../components/Head";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
    selectCurrentUser,
    setCurrentUser,
} from "../../slices/sliceCurrentUser";
import { trpc } from "../../utils/trpc";

type IPost = Post & { user: User; comments: Comment & { user: User } };

const PostDetail: FunctionComponent = () => {
    const { query, isReady } = useRouter();
    const postId = query.postId ? query.postId[0] : "";
    const [count, setCount] = useState(0);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    // if (!currentUser) {
    //     const { data: session, status } = useSession();
    //     if (status === "authenticated") {
    //         dispatch(setCurrentUser(session?.user as User));
    //     } else {
    //         return <div>LOADING</div>;
    //     }
    // }
    const router = useRouter();
    console.log(currentUser);

    TimeAgo.setDefaultLocale(de.locale);
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo("en-US");

    const handleError = (error: string) => {
        if (error === "UNAUTHORIZED") {
            router.push("/error/e401");
        } else if (error === "FORBIDDEN") {
            router.push("/error/e403");
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

    return (
        <div>
            <HeadPages />
            <div className='h-screen overflow-hidden	'>
                <div className='sticky top-0 z-50'>
                    <Navbar />
                </div>
                <div className='w-full flex flex-row flex-wrap '>
                    <div className='w-full primary-color h-screen flex flex-row flex-wrap justify-center '>
                        <Sidebar />
                        <div className='xl:w-2/5 md:w-3/4 lg:w-4/5 py-5 md:px-12 lg:24 h-full w-full overflow-y-intial antialiased overflow-x-hidden'>
                            {isReady ? (
                                data ? (
                                    <div>
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
