import React from "react";
import imageBuilder from "../../client/imageBuilder";

import Contentsection from "./Contentsection";
import CommentSection from "./CommentSection";

const Post = ({
    post: { comments, image, _id, postedBy, content },
    setCount,
}) => {
    return (
        <div className='bg-white mt-3 rounded-2xl'>
            {image != "" && (
                <img
                    className='object fill w-full border rounded-t-2xl shadow-lg '
                    src={image}
                    alt='imgpost'
                />
            )}
            <Contentsection postedBy={postedBy} content={content} />
            <CommentSection
                comments={comments}
                postId={_id}
                setCount={setCount}
            />
        </div>
    );
};

export default Post;
