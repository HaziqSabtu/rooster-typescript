import React, { FunctionComponent } from "react";
import Image from "next/image";
import { joinClassNames } from "../../services/common";

interface Props {
    src: string;
    size: number;
    alt?: string;
    className?: string;
}

const ImageProfile: FunctionComponent<Props> = ({
    src,
    size,
    alt,
    className,
}) => {
    return (
        <div
            className={joinClassNames(
                "relative ",
                `w-${size} h-${size}`,
                // `h-16 w-16`,
                className ? className : ""
            )}
        >
            <Image
                src={src}
                className='rounded-full '
                layout='fill'
                objectFit='contain'
                alt={alt ? alt : "placeholder"}
            />
        </div>
    );
};

export default ImageProfile;
