import { Comment, Post, User } from "@prisma/client";
import React, { FunctionComponent } from "react";
import DeletePost from "../Post/DeletePost";
import DropdownDelete from "./DropdownDelete";
import tripleDots from "../../assets/icons/components/triple-dots.png";
import { TripleDots } from "../../assets/icons";
import DropdownFollow from "./DropdownFollow";
import { User as currentUser } from "next-auth";
import DropdownUnFollow from "./DropdownUnFollow";
import { userAgent } from "next/server";

interface DropdownPostProps {
    htmlFor: string;
    postedById: User["id"];
    currentUser: currentUser["id"];
    postId: Post["id"];
    cu: User;
}

export const DropdownPost: FunctionComponent<DropdownPostProps> = ({
    htmlFor,
    postedById,
    currentUser,
    postId,
    cu,
}) => {
    return (
        <div className='dropdown dropdown-end h-10'>
            <label
                tabIndex={0}
                className='m-1 cursor-pointer'
                onClick={() => console.log(postId)}
            >
                <div className=''>
                    <TripleDots size={20} />
                    {/* <img src={tripleDots.src} width={20} height={20} /> */}
                </div>
            </label>
            <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
                {/* <li>
                    <DropdownDelete
                        htmlFor={htmlFor}
                        size={15}
                        text={"Delete Post"}
                    />
                </li> */}
                {!cu.followedByIDs.includes(postedById) ? (
                    <li>
                        <DropdownFollow
                            size={12}
                            text={"Follow User"}
                            postedById={postedById}
                            currentUser={currentUser}
                        />
                    </li>
                ) : (
                    <li>
                        <DropdownUnFollow
                            size={12}
                            text={"Remove User"}
                            postedById={postedById}
                            currentUser={currentUser}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
};

interface DropdownCommentProps {
    htmlFor: string;
    postedById: User["id"];
    currentUser: currentUser["id"];
}

export const DropdownComment: FunctionComponent<DropdownCommentProps> = ({
    htmlFor,
    postedById,
    currentUser,
}) => {
    return (
        <div className='dropdown dropdown-end h-10'>
            <label tabIndex={0} className='m-1 cursor-pointer'>
                <TripleDots size={20} />
            </label>
            <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
                <li>
                    <DropdownDelete
                        htmlFor={htmlFor}
                        size={12}
                        text={"Delete Comment"}
                    />
                </li>
                <li>
                    <DropdownFollow
                        size={12}
                        text={"Follow User"}
                        postedById={postedById}
                        currentUser={currentUser}
                    />
                </li>
            </ul>
        </div>
    );
};
