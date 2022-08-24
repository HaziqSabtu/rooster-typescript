import React, { FunctionComponent } from "react";

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}

export const NewPost: FunctionComponent<Props> = ({ handleChange, value }) => {
    return (
        <textarea
            className='bg-gray-200 w-full rounded-lg shadow border p-3'
            rows={4}
            placeholder='Write Something Here'
            onChange={handleChange}
            name='text'
            value={value}
        ></textarea>
    );
};
export const WarningNewPost: FunctionComponent<Props> = ({
    handleChange,
    value,
}) => {
    return (
        <textarea
            className='bg-gray-200 w-full rounded-lg shadow border p-3 border-rose-500 placeholder-red-500'
            rows={4}
            placeholder='Write Something Here'
            onChange={handleChange}
            name='text'
            value={value}
        ></textarea>
    );
};
