import React from "react";

const CommentList = ({
    comment: {
        comment,
        postedBy: { profilePicture, ...postedBy },
    },
}) => {
    return (
        <div className='primary-color border-x border-t shadow p-4 text-lg text-color-p font-semibold'>
            <div className='flex items-center'>
                {profilePicture && (
                    <img
                        className='rounded-full border w-5 mr-2'
                        src={profilePicture}
                        alt='postedBy'
                    />
                )}
                <h3 className='text-xs'>@{postedBy.name}</h3>
            </div>
            {comment}
        </div>
    );
};

export default CommentList;
