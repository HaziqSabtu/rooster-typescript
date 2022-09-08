import { Post, User } from "@prisma/client";
import React, { FunctionComponent } from "react";
import { DropdownDeleteComment, DropdownDeletePost } from "./DropdownDelete";
import { TripleDots } from "../../assets/icons";
import DropdownFollow from "./DropdownFollow";
import { User as currentUser } from "next-auth";
import DropdownUnFollow from "./DropdownUnFollow";

interface DropdownPostProps {
    postedById: User["id"];
    currentUserId: currentUser["id"];
    postId: Post["id"];
    followedByIDs: User["followedByIDs"];
}

export const DropdownPost: FunctionComponent<DropdownPostProps> = ({
    postedById,
    currentUserId,
    postId,
    followedByIDs,
}) => {
    return (
        <div className='dropdown dropdown-end h-10'>
            <label
                tabIndex={0}
                className='m-1 cursor-pointer btn btn-sm btn-ghost'
                onClick={() => console.log(postId)}
            >
                <div className=''>
                    <TripleDots size={20} />
                </div>
            </label>
            <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
                {postedById === currentUserId ? (
                    <li>
                        <DropdownDeletePost size={15} postId={postId} />
                    </li>
                ) : null}

                {!followedByIDs?.includes(postedById) ? (
                    <li>
                        <DropdownFollow
                            size={12}
                            text={"Follow User"}
                            postedById={postedById}
                            currentUserId={currentUserId}
                        />
                    </li>
                ) : (
                    <li>
                        <DropdownUnFollow
                            size={12}
                            text={"Remove User"}
                            postedById={postedById}
                            currentUserId={currentUserId}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
};

interface DropdownCommentProps {
    postedById: User["id"];
    currentUserId: currentUser["id"];
    followedByIDs: User["followedByIDs"];
    commentId: string;
}

export const DropdownComment: FunctionComponent<DropdownCommentProps> = ({
    postedById,
    currentUserId,
    followedByIDs,
    commentId,
}) => {
    return (
        <div className='dropdown dropdown-end h-10'>
            <label
                tabIndex={0}
                className='m-1 cursor-pointer btn btn-sm btn-ghost'
            >
                <TripleDots size={15} />
            </label>
            <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
                <li>
                    <DropdownDeleteComment size={12} commentId={commentId} />
                </li>
                {!followedByIDs?.includes(postedById) ? (
                    <li>
                        <DropdownFollow
                            size={12}
                            text={"Follow User"}
                            postedById={postedById}
                            currentUserId={currentUserId}
                        />
                    </li>
                ) : (
                    <li>
                        <DropdownUnFollow
                            size={12}
                            text={"Remove User"}
                            postedById={postedById}
                            currentUserId={currentUserId}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
};
