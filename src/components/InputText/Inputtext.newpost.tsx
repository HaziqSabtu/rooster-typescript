import React, { FunctionComponent } from "react";

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
    inputRef: React.RefObject<HTMLTextAreaElement>;
}

export const NewPost: FunctionComponent<Props> = ({
    handleChange,
    inputRef,
    value,
}) => {
    return (
        <textarea
            className='bg-inherit outline-none w-full rounded-lg p-3'
            rows={4}
            placeholder="What's on your mind?"
            onChange={handleChange}
            name='text'
            value={value}
            ref={inputRef}
        ></textarea>
    );
};

export const WarningNewPost: FunctionComponent<Props> = ({
    handleChange,
    value,
    inputRef,
}) => {
    return (
        <textarea
            className='bg-gray-200 outline-none w-full rounded-lg shadow border p-3 border-rose-500 placeholder-red-500'
            rows={4}
            placeholder="What's on your mind?"
            onChange={handleChange}
            name='text'
            value={value}
            ref={inputRef}
        ></textarea>
    );
};
