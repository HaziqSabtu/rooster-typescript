import { Post } from "@prisma/client";
import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { Trash } from "../../assets/icons";
import { setCommentId } from "../../slices/sliceDeleteComment";
import { setPostId } from "../../slices/sliceDeletePost";

interface DeletePostProps {
    size: number;
    postId: Post["id"];
}

export const DropdownDeletePost: FunctionComponent<DeletePostProps> = ({
    size,
    postId,
}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setPostId(postId));
    };
    return (
        <label
            htmlFor='modal-delete-post'
            className='modal-button p-3 hover:bg-red-500 hover:text-black'
            onClick={handleClick}
        >
            <a className='cursor-pointer'>
                <div className='flex flex-row items-center'>
                    <Trash size={size} />
                    <span className='ml-2 text-sm'>
                        <span>Delete Post</span>
                    </span>
                </div>
            </a>
        </label>
    );
};

interface DeleteCommentProps {
    size: number;
    commentId: string;
}

export const DropdownDeleteComment: FunctionComponent<DeleteCommentProps> = ({
    size,
    commentId,
}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCommentId(commentId));
    };
    return (
        <label
            htmlFor='modal-delete-comment'
            className='modal-button'
            onClick={handleClick}
        >
            <a className='cursor-pointer'>
                <div className='flex flex-row items-center'>
                    <Trash size={size} />
                    <span className='ml-2 text-sm'>
                        <span>Delete Comment</span>
                    </span>
                </div>
            </a>
        </label>
    );
};
