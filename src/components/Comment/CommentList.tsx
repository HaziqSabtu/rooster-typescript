import React, { FunctionComponent, useState } from "react";
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
import ImageProfile from "../Image/ImageProfile";

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
        followingIDs,
    } = currentUser || {};

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div
            className='primary-color  p-4 text-lg text-color-p font-semibold'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div className='flex flex-row justify-between items-center h-10'>
                <div className='flex items-center'>
                    {image ? (
                        <ImageProfile
                            src={image}
                            size={5}
                            alt={"commentedBy"}
                        />
                    ) : (
                        <PImagePosts
                            size={20}
                            letter={currentUserName?.charAt(0) as string}
                        />
                    )}
                    <h3 className='text-xs ml-2 mr-5 text-color-s tracking-widest'>
                        <span className=''></span>
                        {name}
                    </h3>
                    <Time createdAt={createdAt} />
                </div>
                {isHovering && (
                    <DropdownComment
                        postedById={postedById}
                        currentUserId={currentUserId as string}
                        commentId={commentId}
                        followingIDs={followingIDs}
                    />
                )}
                <ModalCommentDelete setCount={setCount} />
            </div>
            <Link href={`/post/${postId}`}>
                <h1 className='text-sm text-color-s cursor-pointer posttext comment-content'>
                    {content}
                </h1>
            </Link>
        </div>
    );
};

export default CommentList;
