import React from "react";

const Contentsection = ({
    postedBy: { profilePicture, ...postedBy },
    content,
}) => {
    return (
        <div className='primary-color border rounded-t-2xl shadow p-5 text-xl text-color-p font-semibold'>
            <div className='flex'>
                {profilePicture && (
                    <img
                        className='rounded-full border w-8 mr-2'
                        src={profilePicture}
                        alt='postedBy'
                    />
                )}
                <h3>@{postedBy.name}</h3>
            </div>
            {content}
        </div>
    );
};

export default Contentsection;
