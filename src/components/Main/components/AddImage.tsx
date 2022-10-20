import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { FunctionComponent, useState } from "react";
import UploadImageButton from "../../Button/ButtonUploadImage";
import { LayoutPopOver } from "../../Layout/LayoutPopOver";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
    removeOneImage,
    selectCurrentPost,
    setImage,
} from "../../../slices/sliceNewPost";

interface Props {}

const AddImage: FunctionComponent<Props> = ({}) => {
    const title = "Add Image";
    const desc = "Add image(s) to your post (max. 4)";
    const { image, video } = useSelector(selectCurrentPost);
    return (
        <LayoutPopOver
            icon={<PhotoIcon />}
            title={title}
            desc={desc}
            isDisabled={video ? true : false}
            isCircle={image.length !== 0 ? true : false}
        >
            <div className='flex gap-2 my-4'>
                {image?.map((url) => (
                    <ImageCard url={url} key={url} />
                ))}
            </div>
            <UploadImageButton
                limit={4}
                image={image}
                dispatchAction={setImage}
            />
        </LayoutPopOver>
    );
};

export default AddImage;

interface imageCardProps {
    url: string;
}
const ImageCard: FunctionComponent<imageCardProps> = ({ url }) => {
    const [isHovering, setIsHovering] = useState(false);
    const dispatch = useDispatch();
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleXMark = () => {
        dispatch(removeOneImage(url));
    };
    return (
        <div
            className='h-10 w-10 relative'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <Image
                src={url}
                layout='fill'
                objectFit='cover'
                className='rounded-sm'
            />
            {isHovering && (
                <div
                    className=' absolute text-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 bg-opacity-50'
                    onClick={handleXMark}
                >
                    <XMarkIcon className='h-10 w-10' />
                </div>
            )}
        </div>
    );
};
