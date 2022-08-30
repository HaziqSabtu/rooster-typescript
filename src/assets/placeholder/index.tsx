import React, { FunctionComponent } from "react";

interface Props {
    size: number;
    letter: string;
}

export const PImagePropfile: FunctionComponent<Props> = ({ size, letter }) => {
    const style = {
        width: size,
        height: size,
    };
    return (
        <div
            style={style}
            className='inline-flex overflow-hidden relative justify-center items-center bg-gray-100 rounded-full dark:bg-gray-600 animate-[bounce_3s_ease-in-out_infinite]'
        >
            <span className='font-medium text-gray-600 dark:text-gray-300'>
                {letter}
            </span>
        </div>
    );
};

export const PImagePosts: FunctionComponent<Props> = ({ size, letter }) => {
    const style = {
        width: size,
        height: size,
    };
    return (
        <div
            style={style}
            className='inline-flex overflow-hidden relative justify-center items-center bg-gray-100 rounded-full dark:bg-gray-600'
        >
            <span className='font-medium text-gray-600 dark:text-gray-300'>
                {letter}
            </span>
        </div>
    );
};
