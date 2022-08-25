import React, { FunctionComponent } from "react";
import { Comment, Post, User } from "@prisma/client";
import Contentsection from "../Content/Contentsection";
import CommentSection from "../Comment/CommentSection";
import { User as UserNext } from "next-auth";

// import { Post } from "prisma_types";
interface Props {
    key: string;
    post: Post & { user: User; comments: (Comment & { user: User })[] };
    setCount: React.Dispatch<React.SetStateAction<number>>;
    currentUser: UserNext;
}

const PostList: FunctionComponent<Props> = ({
    post: { image, content, user, id, comments },
    setCount,
    currentUser,
}) => {
    console.log(currentUser);

    return (
        <div className='bg-white mt-3'>
            {image ? (
                <img
                    className='object fill w-full border rounded-t-2xl shadow-lg '
                    src={image}
                    alt='imgpost'
                />
            ) : null}
            <Contentsection postedBy={user} content={content} />
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
