import React, { FunctionComponent } from "react";
import { Post, User } from "@prisma/client";

interface Props {
    postedBy: User;
    content: Post["content"];
}

const Contentsection: FunctionComponent<Props> = ({
    postedBy: { image, ...postedBy },
    content,
}) => {
    return (
        <div className='primary-color border rounded-t-2xl shadow p-5 text-xl text-color-p font-semibold'>
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
