import { Comment, Post } from "@prisma/client";
import { User } from "next-auth";

export const getCommentDeleteInput = (commentId: Comment["id"]) => {
    return {
        commentIDs: commentId,
    };
};

export const getCommentCreateInput = (
    content: Comment["content"],
    postId: Post["id"],
    userIDs: User["id"]
) => {
    return {
        content: content,
        postIDs: postId,
        userIDs: userIDs,
    };
};
