import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import {
    setImageArray,
    setImageIndex,
    setOpenModal,
} from "../../slices/sliceModalImage";
import Image from "next/image";

interface Image {
    src: string;
    image: string[];
}

const ImageComponent: FunctionComponent<Image> = ({ src, image }) => {
    const dispatch = useDispatch();
    return (
        <a
            onClick={() => {
                dispatch(setOpenModal());
                dispatch(setImageArray(image));
                dispatch(setImageIndex(image.indexOf(src)));
            }}
            className='cursor-pointer'
        >
            <Image
                className='rounded-lg'
                src={src}
                alt='Imagepost'
                layout='fill'
                objectFit='cover'
            />
        </a>
    );
};

export const generateImage = (image: string[]) => {
    if (image.length === 1) {
        return (
            <div className='relative w-full h-72 flex justify-center'>
                <ImageComponent src={image[0] as string} image={image} />
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
                        <ImageComponent src={img} image={image} />
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
                    <ImageComponent src={firstRow as string} image={image} />
                </div>
                <div className='w-1/2 h-72 flex flex-col gap-y-4'>
                    {secondRow.map((img) => (
                        <div
                            className='relative h-1/2 flex justify-center '
                            key={img}
                        >
                            <ImageComponent src={img} image={image} />
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
                            <ImageComponent src={img} image={image} />
                        </div>
                    ))}
                </div>
                <div className='w-1/2 h-72 flex flex-col gap-y-4'>
                    {secondRow.map((img) => (
                        <div
                            className='relative h-1/2 flex justify-center '
                            key={img}
                        >
                            <ImageComponent src={img} image={image} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};
