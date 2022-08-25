import React, { FunctionComponent } from "react";
import { Post, User } from "@prisma/client";
import { User as UserNext } from "next-auth";
import TimeAgo from "javascript-time-ago";
import { create } from "domain";
import Time from "../Time/Time";

interface Props {
    postedBy: User;
    content: Post["content"];
    timeago: TimeAgo;
    createdAt: Post["createdAt"];
}

const Contentsection: FunctionComponent<Props> = ({
    postedBy: { image, ...postedBy },
    content,
    timeago,
    createdAt,
}) => {
    return (
        <div className='primary-color shadow p-5 text-xl text-color-p font-semibold'>
            <div className='flex'>
                {image ? (
                    <img
                        className='rounded-full border w-8 mr-2'
                        src={image}
                        alt='postedBy'
                    />
                ) : null}
                <Time createdAt={createdAt} />
                <h3>@{postedBy.name}</h3>
            </div>
            {content}
        </div>
    );
};

export default Contentsection;
