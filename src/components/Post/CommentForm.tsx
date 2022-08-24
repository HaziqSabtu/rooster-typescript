import React, { FunctionComponent } from "react";
import { useState } from "react";

import axios from "axios";

interface Props {
    postId: string;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}
const CommentForm: FunctionComponent<Props> = ({ postId, setCount }) => {
    const [isCommented, setIsCommented] = useState(false);
    const [userInput, setUserInput] = useState({ comment: "" });
    const [isEmpty, setIsEmpty] = useState(true);
    const [warning, setWarning] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    // logging every input from user
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput((oldInput) => {
            return {
                ...oldInput,
                comment: e.target.value,
            };
        });
        if (userInput.comment.length <= 1) {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
            setWarning(false);
            setIsCommented(false);
        }
    };

    const handleEmpty = () => {
        setWarning(true);
    };

    const processInput = () => {
        return { comment: userInput.comment, postId: postId };
    };

    const handleClick = () => {
        // if (userInput.comment !== "") {
        //     setIsCommented(true);
        //     console.log(processInput());
        //     axios(createCommentConfig(processInput()))
        //         .then(function (response) {
        //             console.log(JSON.stringify(response.data));
        //             setCount((c) => c + 1);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        //     setUserInput((oldVal) => {
        //         return { ...oldVal, comment: "" };
        //     });
        // }
    };
    return (
        <div className=' rounded-xl'>
            <form onSubmit={onSubmit}>
                <div className='relative'>
                    <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'></div>
                    {!warning ? (
                        <input
                            type='commentForm'
                            autoComplete='off'
                            id='commentForm'
                            className='block p-4 pl-4 w-full text-sm text-white border-y border-gray-300 focus:ring-blue-500 focus:border-blue-500 primary-color'
                            placeholder='Comment'
                            // required=''
                            onChange={handleChange}
                            value={userInput.comment}
                        />
                    ) : (
                        <input
                            type='commentForm'
                            autoComplete='off'
                            id='commentForm'
                            className='block p-4 pl-4 w-full text-sm text-white border focus:ring-blue-500 focus:border-blue-500 primary-color border-rose-500 placeholder-red-500'
                            placeholder='Comment'
                            // required=''
                            onChange={handleChange}
                            value={userInput.comment}
                        />
                    )}
                    {isEmpty ? (
                        <button
                            type='submit'
                            onClick={handleEmpty}
                            className='text-white absolute right-2.5 bottom-2.5 disabled-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
                        >
                            Comment
                        </button>
                    ) : (
                        <button
                            type='submit'
                            onClick={handleClick}
                            className='text-white absolute right-2.5 bottom-2.5 secondary-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
                        >
                            {!isCommented ? "Comment" : "Commented"}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CommentForm;
