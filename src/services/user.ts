import { Comment, Post, User } from "@prisma/client";
import { User as currentUser } from "next-auth";

export const getAddFollowerInput = (
    followingId: User["id"],
    userId: currentUser["id"]
) => {
    return {
        followingIDs: followingId,
        userIDs: userId,
    };
};

export const getUpdateUserNameInput = (name: User["name"]) => {
    return {
        name: name as string,
    };
};

export const getUpdateUserImageInput = (image: User["image"]) => {
    return {
        image: image as string,
    };
};

// export const getCommentCreateInput = (
//     content: Comment["content"],
//     postId: Post["id"],
//     userIDs: User["id"]
// ) => {
//     return {
//         content: content,
//         postIDs: postId,
//         userIDs: userIDs,
//     };
// };
