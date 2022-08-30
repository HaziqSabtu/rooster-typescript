import React, { FunctionComponent } from "react";
import { Comment, Post, User } from "@prisma/client";
import Contentsection from "../Content/Contentsection";
import CommentSection from "../Comment/CommentSection";
import { User as currentUser } from "next-auth";
import TimeAgo from "javascript-time-ago";

// import { Post } from "prisma_types";
interface Props {
    key: Post["id"];
    post: Post & { user: User; comments: (Comment & { user: User })[] };
    setCount: React.Dispatch<React.SetStateAction<number>>;
    currentUser: currentUser;
    timeAgo: TimeAgo;
}

const PostList: FunctionComponent<Props> = ({
    post: { image, content, id, user, comments, createdAt },
    setCount,
    currentUser,
    timeAgo,
}) => {
    // console.log(id);
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
                currentUser={currentUser}
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
