import React, { FunctionComponent } from "react";
import { Post, User } from "@prisma/client";
import { User as UserNext } from "next-auth";

interface Props {
    postedBy: User;
    content: Post["content"];
}

const Contentsection: FunctionComponent<Props> = ({
    postedBy: { image, ...postedBy },
    content,
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
                <h3>@{postedBy.name}</h3>
            </div>
            {content}
        </div>
    );
};

export default Contentsection;
