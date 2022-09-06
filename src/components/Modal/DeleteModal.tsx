import { Comment } from "@prisma/client";
import React, { FunctionComponent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RedAlert } from "../../assets/icons";
import { selectCommentId, setCommentId } from "../../slices/sliceDeleteComment";
import { selectPostId, setPostId } from "../../slices/sliceDeletePost";
import { trpc } from "../../utils/trpc";
import { ButtonApproveRed, ButtonCancel } from "../Button/ButtonModal";

interface ModalPostDeleteProps {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const ModalPostDelete: FunctionComponent<ModalPostDeleteProps> = ({
    setCount,
}) => {
    const postId = useSelector(selectPostId);
    const dispatch = useDispatch();
    const { mutateAsync } = trpc.useMutation(["post.delete"]);

    const handleClick = async () => {
        await mutateAsync({
            postIDs: postId,
        }).then(() => {
            dispatch(setPostId(""));
            setCount((c) => c + 1);
        });
    };

    return (
        <>
            <input
                type='checkbox'
                id='modal-delete-post'
                className='modal-toggle'
            />
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
                                <ButtonCancel htmlFor='modal-delete-post' />
                                <ButtonApproveRed
                                    htmlFor='modal-delete-post'
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
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const ModalCommentDelete: FunctionComponent<ModalCommentDeleteProps> = ({
    setCount,
}) => {
    const { mutateAsync } = trpc.useMutation(["comment.delete"]);
    const commentId = useSelector(selectCommentId);

    const dispatch = useDispatch();

    const handleClick = async () => {
        await mutateAsync({
            commentIDs: commentId,
        }).then(() => {
            dispatch(setCommentId(""));
            setCount((c) => c + 1);
        });
    };

    return (
        <>
            <input
                type='checkbox'
                id='modal-delete-comment'
                className='modal-toggle'
            />

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
                                <ButtonCancel htmlFor='modal-delete-comment' />
                                <ButtonApproveRed
                                    htmlFor='modal-delete-comment'
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
