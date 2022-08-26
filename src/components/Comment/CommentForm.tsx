import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useRef,
} from "react";
import { useState } from "react";
import { User } from "next-auth";
import { trpc } from "../../utils/trpc";
import {
    DisableButton,
    LoadingButton,
    NormalButton,
    SubmittedButton,
} from "../Button/ButtonSubmit";

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
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const styleButton = {
        width: "140px",
        right: "10px",
        bottom: "10px",
        position: "absolute" as "absolute",
    };

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

    const processData = () => {
        return {
            content: userInput.comment,
            postIDs: postId,
            userIDs: currentUser.id,
        };
    };

    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // submit new post
    const handleSubmit = useCallback(async () => {
        setIsLoading((state) => !state);
        await sleep(5000);
        await mutateAsync(processData());
        setCount((c) => c + 1);
        setIsLoading((state) => !state);
        setIsCommented(true);
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
                    {isCommented ? (
                        <SubmittedButton
                            text={"Commented"}
                            style={styleButton}
                        />
                    ) : isEmpty ? (
                        <DisableButton text={"Comment"} style={styleButton} />
                    ) : isLoading ? (
                        <LoadingButton
                            // text={"Commentting"}
                            style={styleButton}
                        />
                    ) : (
                        <NormalButton
                            handleSubmit={handleSubmit}
                            text={"Comment"}
                            style={styleButton}
                        />
                    )}
                </div>
            </form>
        </div>
    );
};

export default CommentForm;
