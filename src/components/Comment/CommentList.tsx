import React, { FunctionComponent } from "react";
import { Comment, User } from "@prisma/client";
import Time from "../Time/Time";
import { Trash } from "../../assets/icons";
import { DropdownComment, DropdownPost } from "../Dropdown/Dropdown";
import { ModalCommentDelete } from "../Modal/DeleteModal";
import { PImagePosts } from "../../assets/placeholder";
import { User as currentUser } from "next-auth";

interface Props {
    comment: Comment & { user: User };
    setCount: React.Dispatch<React.SetStateAction<number>>;
    currentUser: currentUser;
}

const CommentList: FunctionComponent<Props> = ({
    comment: {
        content,
        user: { image, name },
        createdAt,
        id,
    },
    setCount,
    currentUser: { id: currentUserId, name: currentUserName },
}) => {
    const htmlFor = "deletecomment";
    return (
        <div className='primary-color  p-4 text-lg text-color-p font-semibold'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex items-center'>
                    {image ? (
                        <img
                            className='rounded-full w-5 mr-2'
                            src={image}
                            alt='postedBy'
                        />
                    ) : (
                        <PImagePosts
                            size={20}
                            letter={currentUserName?.charAt(0) as string}
                        />
                    )}
                    <h3 className='text-xs mr-5 text-color-s'>@{name}</h3>
                    <Time createdAt={createdAt} />
                </div>
                <DropdownComment
                    htmlFor={htmlFor}
                    postedById={id}
                    currentUser={currentUserId}
                />
                <ModalCommentDelete
                    htmlFor={htmlFor}
                    commentId={id}
                    setCount={setCount}
                />
            </div>
            <h1 className='text-sm text-color-s'> {content}</h1>
        </div>
    );
};

export default CommentList;
