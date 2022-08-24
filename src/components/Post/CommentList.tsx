import React, { FunctionComponent } from "react";
import { Comment, User } from "@prisma/client";

interface Props {
    comment: Comment & { user: User };
}

const CommentList: FunctionComponent<Props> = ({
    comment: {
        content,
        user: { image, name },
    },
}) => {
    return (
        <div className='primary-color border-x border-t shadow p-4 text-lg text-color-p font-semibold'>
            <div className='flex items-center'>
                {image && (
                    <img
                        className='rounded-full border w-5 mr-2'
                        src={image}
                        alt='postedBy'
                    />
                )}
                <h3 className='text-xs'>@{name}</h3>
            </div>
            {content}
        </div>
    );
};

export default CommentList;
