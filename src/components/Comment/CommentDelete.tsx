import { Comment, Post } from "@prisma/client";
import React, { FunctionComponent, useCallback } from "react";
import { RedAlert, Trash } from "../../assets/icons";
import { trpc } from "../../utils/trpc";
import DeleteModal from "../Modal/DeleteModal";

interface Props {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    size: number;
    commentId: Comment["id"];
    htmlFor: string;
}

const CommentDelete: FunctionComponent<Props> = ({
    size,
    commentId,
    htmlFor,
}) => {
    return (
        <>
            <div>
                <label htmlFor={htmlFor} className='modal-button'>
                    <a
                        className='cursor-pointer'
                        data-modal-toggle='popup-modal'
                    >
                        <div className='flex flex-row items-center'>
                            <Trash size={size} />
                            <span className='ml-2'>Delete Comment</span>
                        </div>
                    </a>
                </label>
            </div>
        </>
    );
};

export default CommentDelete;
