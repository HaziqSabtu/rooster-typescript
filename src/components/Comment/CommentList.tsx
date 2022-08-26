import React, { FunctionComponent } from "react";
import { Comment, User } from "@prisma/client";
import Time from "../Time/Time";
import { Trash } from "../../assets/icons";

interface Props {
    comment: Comment & { user: User };
}

const CommentList: FunctionComponent<Props> = ({
    comment: {
        content,
        user: { image, name },
        createdAt,
    },
}) => {
    return (
        <div className='primary-color  p-4 text-lg text-color-p font-semibold'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex items-center'>
                    {image && (
                        <img
                            className='rounded-full w-5 mr-2'
                            src={image}
                            alt='postedBy'
                        />
                    )}
                    <h3 className='text-xs mr-5'>@{name}</h3>
                    <Time createdAt={createdAt} />
                </div>
                <Trash size={10} />
            </div>
            <h1 className='text-sm'> {content}</h1>
        </div>
    );
};

export default CommentList;
