import React, { FunctionComponent } from "react";
import { Comment, Post, User } from "@prisma/client";
import Contentsection from "../Content/Contentsection";
import CommentSection from "../Comment/CommentSection";
import { User as currentUser } from "next-auth";
import TimeAgo from "javascript-time-ago";
import Image from "next/image";
interface Props {
    key: Post["id"];
    post: Post & { user: User; comments: (Comment & { user: User })[] };
    setCount: React.Dispatch<React.SetStateAction<number>>;
    currentUser: currentUser;
    timeAgo: TimeAgo;
}

const PostList: FunctionComponent<Props> = ({
    post: { image, content, id: postId, user, comments, createdAt },
    setCount,
    currentUser,
    timeAgo,
}) => {
    return (
        <div className='bg-white border-y'>
            {image ? (
                <Image
                    className='object fill w-full border rounded-t-2xl '
                    src={image}
                    alt='Imagepost'
                    width='100%'
                    layout='fill'
                />
            ) : null}
            <Contentsection
                postedBy={user}
                content={content}
                timeago={timeAgo}
                createdAt={createdAt}
                setCount={setCount}
                postId={postId}
                currentUser={currentUser}
            />
            <CommentSection
                comments={comments}
                postId={postId}
                setCount={setCount}
                currentUser={currentUser}
            />
        </div>
    );
};

export default PostList;
