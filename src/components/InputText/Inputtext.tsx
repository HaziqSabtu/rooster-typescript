import React, { FunctionComponent } from "react";

interface Props {
    value: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Inputtext: FunctionComponent<Props> = ({ value, handleChange }) => {
    return (
        <div className='relative z-0 mb-6 w-full group'>
            <input
                type={value}
                name={value}
                id={value}
                className='block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                // required=''
                // value={userInput.email}
                onChange={() => handleChange}
            />
            <label
                htmlFor={value}
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
                {value}
            </label>
        </div>
    );
};

interface CommentProps {
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    inputRef: React.RefObject<HTMLInputElement>;
}

export const InputComment: FunctionComponent<CommentProps> = ({
    handleChange,
    value,
    inputRef,
}) => {
    return (
        <input
            type='commentForm'
            autoComplete='off'
            id='commentForm'
            className='block p-4 pl-4 w-full text-sm text-white border-b border-gray-300  primary-color outline-none'
            placeholder='Comment'
            onChange={handleChange}
            value={value}
            ref={inputRef}
        />
    );
};

export default Inputtext;
