import { Comment, Post } from "@prisma/client";
import React, { FunctionComponent } from "react";
import DeletePost from "../Post/DeletePost";
import DropdownDelete from "./DropdownDelete";
import tripleDots from "../../assets/icons/components/triple-dots.png";
import { TripleDots } from "../../assets/icons";

interface DropdownPostProps {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    postId: Post["id"];
    htmlFor: string;
}

export const DropdownPost: FunctionComponent<DropdownPostProps> = ({
    setCount,
    postId,
    htmlFor,
}) => {
    return (
        <div className='dropdown dropdown-end h-10'>
            <label tabIndex={0} className='m-1 cursor-pointer'>
                <div className=''>
                    <TripleDots size={20} />
                    {/* <img src={tripleDots.src} width={20} height={20} /> */}
                </div>
            </label>
            <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
                <li>
                    <DropdownDelete
                        htmlFor={htmlFor}
                        size={15}
                        text={"delete Post"}
                    />
                </li>
            </ul>
        </div>
    );
};

interface DropdownCommentProps {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    commentId: Comment["id"];
    htmlFor: string;
}

export const DropdownComment: FunctionComponent<DropdownCommentProps> = ({
    setCount,
    commentId,
    htmlFor,
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
                        text={"delete Comment"}
                    />
                </li>
            </ul>
        </div>
    );
};
