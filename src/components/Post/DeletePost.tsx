import { Post } from "@prisma/client";
import React, { FunctionComponent, useCallback } from "react";
import { RedAlert, Trash } from "../../assets/icons";
import { trpc } from "../../utils/trpc";

interface Props {
    htmlFor: string;
}

const DeletePost: FunctionComponent<Props> = ({ htmlFor }) => {
    return (
        <>
            <div>
                <label htmlFor={htmlFor} className='modal-button'>
                    <a
                        className='cursor-pointer'
                        data-modal-toggle='popup-modal'
                    >
                        <div className='flex flex-row items-center'>
                            <Trash size={15} />
                            <span className='ml-2'>Delete Post</span>
                        </div>
                    </a>
                </label>
            </div>
        </>
    );
};

export default DeletePost;
