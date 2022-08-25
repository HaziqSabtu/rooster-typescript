import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useRef,
} from "react";
import { useState } from "react";
import { User } from "next-auth";
import { trpc } from "../../utils/trpc";

interface Props {
    postId: string;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    currentUser: User;
}
const CommentForm: FunctionComponent<Props> = ({
    postId,
    setCount,
    currentUser,
}) => {
    const [isCommented, setIsCommented] = useState(false);
    const [userInput, setUserInput] = useState({ comment: "" });
    const [isEmpty, setIsEmpty] = useState(true);
    // const isEmpty = useRef<boolean>(true);
    const [warning, setWarning] = useState(false);
    const { mutateAsync } = trpc.useMutation(["comment.create"]);
    const inputRef = useRef<HTMLInputElement>(null);

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
    };

    useEffect(() => {
        if (inputRef.current?.value) {
            if (inputRef.current?.value.length === 0) {
                setIsEmpty(true);
            } else {
                setIsEmpty(false);
                setWarning(false);
                setIsCommented(false);
            }
        } else {
            setIsEmpty(true);
        }
    }, [inputRef.current?.value]);

    const handleEmpty = () => {
        setWarning(true);
    };

    const processData = () => {
        return {
            content: userInput.comment,
            postIDs: postId,
            userIDs: currentUser.id,
        };
    };

    // submit new post
    const handleSubmit = useCallback(async () => {
        await mutateAsync(processData());
        setCount((c) => c + 1);
        setUserInput((oldVal) => {
            return { ...oldVal, comment: "" };
        });
    }, [mutateAsync, processData]);

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
                            className='block p-4 pl-4 w-full text-sm text-white border-b border-gray-300  primary-color outline-none'
                            placeholder='Comment'
                            // required=''
                            onChange={handleChange}
                            value={userInput.comment}
                            ref={inputRef}
                        />
                    ) : (
                        <input
                            type='commentForm'
                            autoComplete='off'
                            id='commentForm'
                            className='block p-4 pl-4 w-full text-sm text-white border-b focus:ring-blue-500 focus:border-blue-500 primary-color border-rose-500 placeholder-red-500'
                            placeholder='Comment'
                            // required=''
                            onChange={handleChange}
                            value={userInput.comment}
                            ref={inputRef}
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
                            onClick={handleSubmit}
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
