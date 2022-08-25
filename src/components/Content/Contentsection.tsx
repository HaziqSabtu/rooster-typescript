import React, { FunctionComponent } from "react";
import { Post, User } from "@prisma/client";
import TimeAgo from "javascript-time-ago";
import Time from "../Time/Time";
import DeletePost from "../Post/DeletePost";

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
    return (
        <div className='primary-color shadow p-5 text-xl text-color-p font-semibold'>
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
                <DeletePost setCount={setCount} size={15} postId={postId} />
            </div>

            {content}
        </div>
    );
};

export default Contentsection;
