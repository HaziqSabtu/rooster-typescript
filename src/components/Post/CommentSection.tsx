import React, { FunctionComponent } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { Comment, User } from "@prisma/client";

interface Props {
    comments: [Comment & { user: User }];
    postId: string;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CommentSection: FunctionComponent<Props> = ({
    comments,
    postId,
    setCount,
}) => {
    const generateComment = comments?.map((comment) => {
        return <CommentList key={comment.id} comment={comment} />;
    });

    return (
        <div>
            {generateComment}
            <CommentForm postId={postId} setCount={setCount} />
        </div>
    );
};

export default CommentSection;
