import React, { FunctionComponent, useState } from "react";
import { Comment, Post, User } from "@prisma/client";
import Contentsection from "../Content/Contentsection";
import CommentSection from "../Comment/CommentSection";
import { User as currentUser } from "next-auth";
import TimeAgo from "javascript-time-ago";
import Image from "next/image";
import ImageModal from "../Modal/ImageModal";
import { useDispatch } from "react-redux";
import {
    setImageArray,
    setImageIndex,
    setOpenModal,
} from "../../slices/sliceModalImage";
import { generateVideo } from "../Video";
import { generateImage } from "../Image";
interface Props {
    key: Post["id"];
    post: Post & { user: User; comments: (Comment & { user: User })[] };
    setCount: React.Dispatch<React.SetStateAction<number>>;
    timeAgo: TimeAgo;
}

const PostList: FunctionComponent<Props> = ({
    post: { image, content, id: postId, user, comments, createdAt, video },
    setCount,
    timeAgo,
}) => {
    return (
        <div className='bg-inherit border-y p-5'>
            {image ? generateImage(image) : null}
            {video ? generateVideo(video) : null}
            <Contentsection
                postedBy={user}
                content={content}
                timeago={timeAgo}
                createdAt={createdAt}
                setCount={setCount}
                postId={postId}
                hasMedia={image.length != 0 || video ? true : false}
            />

            <ImageModal />
            <CommentSection
                comments={comments}
                postId={postId}
                setCount={setCount}
            />
        </div>
    );
};

export default PostList;
