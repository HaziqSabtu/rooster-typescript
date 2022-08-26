import React, { FunctionComponent } from "react";
import { Comment, Post, User } from "@prisma/client";
import Contentsection from "../Content/Contentsection";
import CommentSection from "../Comment/CommentSection";
import { User as UserNext } from "next-auth";
import TimeAgo from "javascript-time-ago";

// import { Post } from "prisma_types";
interface Props {
    key: string;
    post: Post & { user: User; comments: (Comment & { user: User })[] };
    setCount: React.Dispatch<React.SetStateAction<number>>;
    currentUser: UserNext;
    timeAgo: TimeAgo;
}

const PostList: FunctionComponent<Props> = ({
    post: { image, content, user, id, comments, createdAt },
    setCount,
    currentUser,
    timeAgo,
}) => {
    return (
        <div className='bg-white border-y'>
            {image ? (
                <img
                    className='object fill w-full border rounded-t-2xl '
                    src={image}
                    alt='imgpost'
                />
            ) : null}
            <Contentsection
                postedBy={user}
                content={content}
                timeago={timeAgo}
                createdAt={createdAt}
                setCount={setCount}
                postId={id}
            />
            <CommentSection
                comments={comments}
                postId={id}
                setCount={setCount}
                currentUser={currentUser}
            />
        </div>
    );
};

export default PostList;
