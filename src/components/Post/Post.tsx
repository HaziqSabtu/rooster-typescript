import React, { FunctionComponent } from "react";
import { Comment, Post, User } from "@prisma/client";
import Contentsection from "./Contentsection";
import CommentSection from "./CommentSection";
// import { Post } from "prisma_types";
interface Props {
    key: string;
    post: Post & { user: User } & { comments: [Comment & { user: User }] };
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Post: FunctionComponent<Props> = ({
    post: { image, content, user, id, comments },
    setCount,
}) => {
    return (
        <div className='bg-white mt-3 rounded-2xl'>
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
            />
        </div>
    );
};

export default Post;
