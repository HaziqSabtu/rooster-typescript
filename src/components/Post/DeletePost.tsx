import { Post } from "@prisma/client";
import React, { FunctionComponent, useCallback } from "react";
import { Trash } from "../../assets/icons";
import { trpc } from "../../utils/trpc";

interface Props {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    size: number;
    postId: Post["id"];
}

const DeletePost: FunctionComponent<Props> = ({ setCount, size, postId }) => {
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
        <div>
            <a onClick={handleClick} className='cursor-pointer'>
                <Trash size={size} />
            </a>
        </div>
    );
};

export default DeletePost;
