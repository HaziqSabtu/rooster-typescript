import React, { FunctionComponent } from "react";
import { Post, User } from "@prisma/client";
import TimeAgo from "javascript-time-ago";
import Time from "../Time/Time";
import DeletePost from "../Post/DeletePost";
import { TripleDots } from "../../assets/icons";
import { DropdownPost } from "../Dropdown/Dropdown";
import { ModalPostDelete } from "../Modal/DeleteModal";
import { trpc } from "../../utils/trpc";

interface Props {
    postedBy: User;
    content: Post["content"];
    timeago: TimeAgo;
    createdAt: Post["createdAt"];
    setCount: React.Dispatch<React.SetStateAction<number>>;
    postId: Post["id"];
}

const Contentsection: FunctionComponent<Props> = ({
    postedBy: { image, ...postedBy },
    content,
    createdAt,
    setCount,
    postId,
}) => {
    const htmlFor = "deletepost";

    return (
        <div className='primary-color p-5 text-xl text-color-p font-semibold'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex'>
                    {image ? (
                        <img
                            className='rounded-full w-8 mr-2'
                            src={image}
                            alt='postedBy'
                        />
                    ) : null}
                    <h3 className='mr-5'>@{postedBy.name}</h3>
                    <Time createdAt={createdAt} />
                </div>
                <DropdownPost
                    setCount={setCount}
                    postId={postId}
                    htmlFor={htmlFor}
                />
                <ModalPostDelete
                    htmlFor={htmlFor}
                    postId={postId}
                    setCount={setCount}
                />
            </div>
            <h1 className='text-xl break-all'> {content}</h1>
        </div>
    );
};

export default Contentsection;
