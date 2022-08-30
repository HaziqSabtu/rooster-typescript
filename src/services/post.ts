import { Post } from "@prisma/client";
import { User } from "next-auth";

export const getPostDeleteInput = (postId: Post["id"]) => {
    return {
        postIDs: postId,
    };
};

export const getPostCreateInput = (
    text: Post["content"],
    image: Post["image"],
    userIDs: User["id"]
) => {
    return {
        content: text,
        image: image,
        userIDs: userIDs,
    };
};
