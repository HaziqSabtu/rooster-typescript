import React, { FunctionComponent } from "react";
import { Comment, Post, User } from "@prisma/client";
import Contentsection from "../Content/Contentsection";
import CommentSection from "../Comment/CommentSection";
import { User as currentUser } from "next-auth";
import TimeAgo from "javascript-time-ago";
import Image from "next/image";
interface Props {
    key: Post["id"];
    post: Post & { user: User; comments: (Comment & { user: User })[] };
    setCount: React.Dispatch<React.SetStateAction<number>>;
    timeAgo: TimeAgo;
}

const generateImage = (image: string[]) => {
    interface Image {
        src: string;
    }
    const ImageComponent: FunctionComponent<Image> = ({ src }) => {
        return (
            <Image
                className='rounded-lg'
                src={src}
                alt='Imagepost'
                layout='fill'
                objectFit='cover'
            />
        );
    };
    if (image.length === 1) {
        return (
            <div className='relative w-full h-72 flex justify-center'>
                <ImageComponent src={image[0] as string} />
            </div>
        );
    }

    if (image.length === 2) {
        return (
            <div className='flex gap-x-4'>
                {image.map((img) => (
                    <div
                        className='relative w-full h-72 flex justify-center '
                        key={img}
                    >
                        <ImageComponent src={img} />
                    </div>
                ))}
            </div>
        );
    }

    if (image.length === 3) {
        const [firstRow, ...secondRow] = image;
        return (
            <div className='flex gap-x-4'>
                <div className='relative w-1/2 h-72 flex justify-center '>
                    <ImageComponent src={firstRow as string} />
                </div>
                <div className='w-1/2 h-72 flex flex-col gap-y-4'>
                    {secondRow.map((img) => (
                        <div
                            className='relative h-1/2 flex justify-center '
                            key={img}
                        >
                            <ImageComponent src={img} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (image.length === 4) {
        const firstRow = image.slice(0, 2);
        const secondRow = image.slice(2, 4);

        return (
            <div className='flex gap-x-4'>
                <div className='w-1/2 h-72 flex flex-col gap-y-4'>
                    {firstRow.map((img) => (
                        <div
                            className='relative h-1/2 flex justify-center '
                            key={img}
                        >
                            <ImageComponent src={img} />
                        </div>
                    ))}
                </div>
                <div className='w-1/2 h-72 flex flex-col gap-y-4'>
                    {secondRow.map((img) => (
                        <div
                            className='relative h-1/2 flex justify-center '
                            key={img}
                        >
                            <ImageComponent src={img} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};

const PostList: FunctionComponent<Props> = ({
    post: { image, content, id: postId, user, comments, createdAt },
    setCount,
    timeAgo,
}) => {
    return (
        <div className='bg-inherit border-y p-5 pb-0'>
            {image ? generateImage(image) : null}
            <Contentsection
                postedBy={user}
                content={content}
                timeago={timeAgo}
                createdAt={createdAt}
                setCount={setCount}
                postId={postId}
                hasImage={image.length != 0 ? true : false}
            />
            <CommentSection
                comments={comments}
                postId={postId}
                setCount={setCount}
            />
        </div>
    );
};

export default PostList;
