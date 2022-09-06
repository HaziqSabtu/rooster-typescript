import React, { FunctionComponent } from "react";
import { Post, User } from "@prisma/client";
import TimeAgo from "javascript-time-ago";
import Time from "../Time/Time";
import DeletePost from "../Post/DeletePost";
import { TripleDots } from "../../assets/icons";
import { DropdownPost } from "../Dropdown/Dropdown";
import { ModalPostDelete } from "../Modal/DeleteModal";
import { trpc } from "../../utils/trpc";
import { User as currentUser } from "next-auth";
import { PImagePosts } from "../../assets/placeholder";
import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "../../slices/counterSlice";
import { selectDeleteModal } from "../../slices/sliceModalDelete";

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
    postId: pp,
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
                    postId={pp}
                />

                <ModalPostDelete setCount={setCount} />
            </div>
            <h1 className='text-xl break-all text-color-s'>{content}</h1>
        </div>
    );
};

export default Contentsection;
