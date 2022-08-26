import { Post } from "@prisma/client";
import React, { FunctionComponent, useCallback } from "react";
import { RedAlert, Trash } from "../../assets/icons";
import { trpc } from "../../utils/trpc";
import DeleteModal from "../Modal/DeleteModal";

interface Props {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    size: number;
    postId: Post["id"];
    htmlFor: string;
}

const DeletePost: FunctionComponent<Props> = ({
    setCount,
    size,
    postId,
    htmlFor,
}) => {
    const { mutateAsync } = trpc.useMutation(["post.delete"]);

    const handleClick = useCallback(async () => {
        await mutateAsync(processData());
        setCount((c) => c + 1);
    }, [mutateAsync]);

    const processData = () => {
        return {
            postIDs: postId,
        };
    };

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
                            <span className='ml-2'>Delete Post</span>
                        </div>
                    </a>
                </label>
            </div>
        </>
    );
};

export default DeletePost;
