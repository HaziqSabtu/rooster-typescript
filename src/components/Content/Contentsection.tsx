import React, { FunctionComponent } from "react";
import { Post, User } from "@prisma/client";
import TimeAgo from "javascript-time-ago";
import Time from "../Time/Time";
import { DropdownPost } from "../Dropdown/Dropdown";
import { ModalPostDelete } from "../Modal/DeleteModal";
import { User as currentUser } from "next-auth";
import { PImagePosts } from "../../assets/placeholder";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../slices/sliceCurrentUser";

interface Props {
    postedBy: User;
    content: Post["content"];
    createdAt: Post["createdAt"];
    timeago: TimeAgo;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    postId: Post["id"];
    hasImage?: boolean;
}

function joinClassNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Contentsection: FunctionComponent<Props> = ({
    postedBy: { image, id, ...postedBy },
    content,
    createdAt,
    setCount,
    postId,
    timeago,
    hasImage,
}) => {
    const currentUser = useSelector(selectCurrentUser);
    const {
        id: currentUserId,
        name: currentUserName,
        followingIDs,
    } = currentUser || {};
    return (
        <div
            className={joinClassNames(
                hasImage ? "mt-5" : "",
                "primary-color text-xl text-color-p font-semibold"
            )}
        >
            <div className='flex flex-row justify-between items-center'>
                <div className='flex'>
                    {image ? (
                        <Image
                            className='rounded-full'
                            src={image}
                            alt='postedBy'
                            width={32}
                            height={32}
                        />
                    ) : (
                        <PImagePosts
                            size={32}
                            letter={currentUserName?.charAt(0) as string}
                        />
                    )}
                    <h3 className='ml-2 mr-5 text-color-s tracking-wider'>
                        {postedBy.name}
                    </h3>
                    <Time createdAt={createdAt} />
                </div>
                <DropdownPost
                    postedById={id}
                    currentUserId={currentUserId as string}
                    followingIDs={followingIDs}
                    postId={postId}
                />
                <ModalPostDelete setCount={setCount} />
            </div>
            <Link href={{ pathname: `/post/${postId}` }}>
                <h1 className='text-xl break-all text-color-s cursor-pointer posttext'>
                    {content}
                </h1>
            </Link>
        </div>
    );
};

export default Contentsection;
