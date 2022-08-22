import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const CommentSection = ({ comments, postId, setCount }) => {
    const generateComment = comments?.map((comment) => {
        return <CommentList key={comment._id} comment={comment} />;
    });

    return (
        <div>
            {generateComment}
            <CommentForm postId={postId} setCount={setCount} />
        </div>
    );
};

export default CommentSection;
