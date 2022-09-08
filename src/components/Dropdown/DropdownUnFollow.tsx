import { User } from "@prisma/client";
import { User as currentUser } from "next-auth";
import React, { FunctionComponent, useCallback } from "react";
import { FollowIcon } from "../../assets/icons";
import { handleError } from "../../services/error";
import { getAddFollowerInput } from "../../services/user";
import { trpc } from "../../utils/trpc";

interface Props {
    size: number;
    text: string;
    postedById: User["id"];
    currentUserId: currentUser["id"];
}

const DropdownUnFollow: FunctionComponent<Props> = ({
    size,
    text,
    postedById,
    currentUserId,
}) => {
    const { mutateAsync } = trpc.useMutation(["user.removeFollower"]);

    const handleClick = useCallback(async () => {
        console.log("handleClick");
        console.log(getAddFollowerInput(postedById, currentUserId));
        await mutateAsync(getAddFollowerInput(postedById, currentUserId))
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                handleError(err.message);
            });
    }, [mutateAsync, getAddFollowerInput]);

    return (
        <>
            <label className='modal-button p-3 hover:bg-red-500 hover:text-black'>
                <a
                    className='cursor-pointer'
                    data-modal-toggle='popup-modal'
                    onClick={handleClick}
                >
                    <div className='flex flex-row items-center'>
                        <FollowIcon size={size} />
                        <span className='ml-2 text-sm'>{text}</span>
                    </div>
                </a>
            </label>
        </>
    );
};

export default DropdownUnFollow;
