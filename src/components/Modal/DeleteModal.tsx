import { Comment, Post } from "@prisma/client";
import React, { FunctionComponent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RedAlert } from "../../assets/icons";
import { getCommentDeleteInput } from "../../services/comment";
import { getPostDeleteInput } from "../../services/post";
import { selectDeleteModal } from "../../slices/SliceModalDelete";
import { trpc } from "../../utils/trpc";
import { ButtonApproveRed, ButtonCancel } from "../Button/ButtonModal";

interface ModalPostDeleteProps {
    htmlFor: string;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    postId: Post["id"];
    handleClick: () => void;
}

export const ModalPostDelete: FunctionComponent<ModalPostDeleteProps> = ({
    htmlFor,
    setCount,
    postId,
    handleClick,
}) => {
    // console.log(postId);
    const deleteModalState = useSelector(selectDeleteModal);
    const dispatch = useDispatch();

    return (
        <>
            <input type='checkbox' id='my-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box'>
                    <div className='flex flex-row items-start'>
                        <RedAlert size={45} />
                        <div className='ml-3 mt-2'>
                            <h3 className='font-bold text-2xl'>Delete Post</h3>
                            <p className='py-4 text-sm'>
                                Are you sure you want to delete this Post? This
                                action cannot be undone.
                            </p>
                            <div className='modal-action'>
                                <ButtonCancel htmlFor='my-modal' />
                                <ButtonApproveRed
                                    htmlFor={htmlFor}
                                    handleClick={handleClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

interface ModalCommentDeleteProps {
    htmlFor: string;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    commentId: Comment["id"];
}

export const ModalCommentDelete: FunctionComponent<ModalCommentDeleteProps> = ({
    htmlFor,
    setCount,
    commentId,
}) => {
    const { mutateAsync } = trpc.useMutation(["comment.delete"]);

    const handleClick = useCallback(async () => {
        await mutateAsync(getCommentDeleteInput(commentId));
        setCount((c) => c + 1);
    }, [mutateAsync]);

    return (
        <>
            <input type='checkbox' id={htmlFor} className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box'>
                    <div className='flex flex-row items-start'>
                        <RedAlert size={45} />
                        <div className='ml-3 mt-2'>
                            <h3 className='font-bold text-2xl'>Delete Post</h3>
                            <p className='py-4 text-sm'>
                                Are you sure you want to delete this Comment?
                                This action cannot be undone.
                            </p>
                            <div className='modal-action'>
                                <ButtonCancel htmlFor={htmlFor} />
                                <ButtonApproveRed
                                    htmlFor={htmlFor}
                                    handleClick={handleClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
