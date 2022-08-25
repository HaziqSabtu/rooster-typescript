import React, { FunctionComponent } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { Comment, User } from "@prisma/client";
import { User as UserNext } from "next-auth";

interface Props {
    comments: (Comment & { user: User })[];
    postId: string;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    currentUser: UserNext;
}

const CommentSection: FunctionComponent<Props> = ({
    comments,
    postId,
    setCount,
    currentUser,
}) => {
    const generateComment = comments?.map((comment) => {
        return <CommentList key={comment.id} comment={comment} />;
    });

    return (
        <div>
            {generateComment}
            <CommentForm
                postId={postId}
                setCount={setCount}
                currentUser={currentUser}
            />
        </div>
    );
};

export default CommentSection;
