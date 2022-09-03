import { User } from "@prisma/client";
import { User as currentUser } from "next-auth";
import React, { FunctionComponent, useCallback } from "react";
import { FollowIcon } from "../../assets/icons";
import { getAddFollowerInput } from "../../services/user";
import { trpc } from "../../utils/trpc";

interface Props {
    size: number;
    text: string;
    postedById: User["id"];
    currentUser: currentUser["id"];
}

const DropdownFollow: FunctionComponent<Props> = ({
    size,
    text,
    postedById,
    currentUser,
}) => {
    // const { data: list, refetch } = trpc.useQuery([
    //     "user.getUser",
    //     { id: currentUser },
    // ]);
    // console.log(list);
    // const handleClick = useCallback(async () => {
    //     console.log("handleClick");
    //     await mutateAsync(getAddFollowerInput(postedById, currentUser))
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // }, [mutateAsync, getAddFollowerInput]);
    const { mutateAsync } = trpc.useMutation(["user.addFollower"]);

    const handleClick = useCallback(async () => {
        console.log("handleClick");
        console.log(getAddFollowerInput(postedById, currentUser));
        await mutateAsync(getAddFollowerInput(postedById, currentUser))
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [mutateAsync, getAddFollowerInput]);

    return (
        <>
            <label className='modal-button p-2 hover:bg-green-400 hover:text-black'>
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

export default DropdownFollow;
