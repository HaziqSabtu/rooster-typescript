import { Post } from "@prisma/client";
import React, { FunctionComponent } from "react";
import { TripleDots } from "../../assets/icons";
import DeleteModal from "../Modal/DeleteModal";
import DeletePost from "../Post/DeletePost";

interface Props {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    postId: Post["id"];
    htmlFor: string;
}

const Dropdown: FunctionComponent<Props> = ({ setCount, postId, htmlFor }) => {
    return (
        <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='m-1 cursor-pointer'>
                <TripleDots size={20} />
            </label>
            <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
                <li>
                    <DeletePost
                        setCount={setCount}
                        size={15}
                        postId={postId}
                        htmlFor={htmlFor}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;
