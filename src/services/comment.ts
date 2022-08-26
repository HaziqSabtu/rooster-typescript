import { Comment } from "@prisma/client";

export const getCommentDeleteInput = (commentId: Comment["id"]) => {
    return {
        commentIDs: commentId,
    };
};
