import React, { FunctionComponent } from "react";
import { Post, User } from "@prisma/client";
import TimeAgo from "javascript-time-ago";
import Time from "../Time/Time";
import { DropdownPost } from "../Dropdown/Dropdown";
import { ModalPostDelete } from "../Modal/DeleteModal";
import { User as currentUser } from "next-auth";
import { PImagePosts } from "../../assets/placeholder";
import Link from "next/link";

interface Props {
    postedBy: User;
    content: Post["content"];
    timeago: TimeAgo;
    createdAt: Post["createdAt"];
    setCount: React.Dispatch<React.SetStateAction<number>>;
    postId: Post["id"];
    currentUser: currentUser;
}

const Contentsection: FunctionComponent<Props> = ({
    postedBy: { image, id, ...postedBy },
    content,
    createdAt,
    setCount,
    postId,
    currentUser: { id: currentUserId, name: currentUserName, followedByIDs },
}) => {
    return (
        <div className='primary-color p-5 text-xl text-color-p font-semibold'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex'>
                    {image ? (
                        <img
                            className='rounded-full w-8 mr-2'
                            src={image}
                            alt='postedBy'
                            placeholder='https://via.placeholder.com/150'
                        />
                    ) : (
                        <PImagePosts
                            size={32}
                            letter={currentUserName?.charAt(0) as string}
                        />
                    )}
                    <h3 className='mr-5 text-color-s'>@{postedBy.name}</h3>
                    <Time createdAt={createdAt} />
                </div>
                <DropdownPost
                    postedById={id}
                    currentUser={currentUserId}
                    followedByIDs={followedByIDs}
                    postId={postId}
                />
                <ModalPostDelete setCount={setCount} />
            </div>
            <Link href={`/post/${postId}`}>
                <h1 className='text-xl break-all text-color-s cursor-pointer'>
                    {content}
                </h1>
            </Link>
        </div>
    );
};

export default Contentsection;
