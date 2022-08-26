import { Post } from "@prisma/client";
import React, { FunctionComponent, useCallback } from "react";
import { RedAlert } from "../../assets/icons";
import { getPostDeleteInput } from "../../services/post";
import { trpc } from "../../utils/trpc";
import { ButtonApproveRed, ButtonCancel } from "../Button/ButtonModal";

interface Props {
    htmlFor: string;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    postId: Post["id"];
}

const DeleteModal: FunctionComponent<Props> = ({
    htmlFor,
    setCount,
    postId,
}) => {
    const { mutateAsync } = trpc.useMutation(["post.delete"]);

    const handleClick = useCallback(async () => {
        await mutateAsync(getPostDeleteInput(postId));
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
                                Are you sure you want to delete this Item? This
                                action cannot be undone.
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

export default DeleteModal;
