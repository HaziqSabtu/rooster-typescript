import React, { FunctionComponent } from "react";
import { Comment, User } from "@prisma/client";
import Time from "../Time/Time";
import { DropdownComment } from "../Dropdown/Dropdown";
import { ModalCommentDelete } from "../Modal/DeleteModal";
import { PImagePosts } from "../../assets/placeholder";
import { User as currentUser } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../slices/sliceCurrentUser";

interface Props {
    comment: Comment & { user: User };
    setCount: React.Dispatch<React.SetStateAction<number>>;
    postId: string;
}

const CommentList: FunctionComponent<Props> = ({
    comment: {
        content,
        user: { image, name, id: postedById },
        createdAt,
        id: commentId,
    },
    setCount,
    postId,
}) => {
    const currentUser = useSelector(selectCurrentUser);
    const {
        id: currentUserId,
        name: currentUserName,
        followedByIDs,
    } = currentUser || {};

    return (
        <div className='primary-color  p-4 text-lg text-color-p font-semibold'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex items-center'>
                    {image ? (
                        <Image
                            className='rounded-full'
                            src={image}
                            width={20}
                            height={20}
                            alt='postedBy'
                        />
                    ) : (
                        <PImagePosts
                            size={20}
                            letter={currentUserName?.charAt(0) as string}
                        />
                    )}
                    <h3 className='text-xs ml-2 mr-5 text-color-s'>@{name}</h3>
                    <Time createdAt={createdAt} />
                </div>
                <DropdownComment
                    postedById={postedById}
                    currentUserId={currentUserId as string}
                    commentId={commentId}
                    followedByIDs={followedByIDs}
                />
                <ModalCommentDelete setCount={setCount} />
            </div>
            <Link href={`/post/${postId}`}>
                <h1 className='text-sm text-color-s cursor-pointer'>
                    {content}
                </h1>
            </Link>
        </div>
    );
};

export default CommentList;
