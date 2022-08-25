import React, {
    FunctionComponent,
    MouseEventHandler,
    useCallback,
    useEffect,
    useRef,
} from "react";
import { useState } from "react";

import UploadImageButton from "../../Button/ButtonUploadImage";
import {
    DisableButton,
    LoadingButton,
    SubmitButton,
} from "../../Button/ButtonSubmit";
import { NewPost, WarningNewPost } from "../../InputText/Inputtext.newpost";
import { trpc } from "../../../utils/trpc";
import { User } from "next-auth";

interface Props {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    user: User;
}

interface UserText {
    text: string;
}

const Usernewpost: FunctionComponent<Props> = ({ setCount, user }) => {
    // const { data: session, status } = useSession();
    const [userText, setUserText] = useState<UserText>({ text: "" });
    const [assetData, setAssetData] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [warning, setWarning] = useState<boolean>(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const { mutateAsync } = trpc.useMutation(["post.create"]);

    const processData = () => {
        return {
            content: userText.text,
            image: null,
            userIDs: user.id,
            // userIDs: session?.user?.id as string,
        };
    };

    console.log(user);

    // log user input
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserText((oldVal) => {
            return {
                ...oldVal,
                [event.target.name]: event.target.value,
            };
        });

        // if (userText.text.length <= 1) {
        //     setIsEmpty(true);
        // } else {
        //     setIsEmpty(false);
        //     setWarning(false);
        // }
    };

    useEffect(() => {
        if (inputRef.current?.value) {
            if (inputRef.current?.value.length === 0) {
                setIsEmpty(true);
            } else {
                setIsEmpty(false);
                setWarning(false);
            }
        } else {
            setIsEmpty(true);
        }
    }, [inputRef.current?.value]);

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        setIsLoading((state) => !state);
        console.log(isLoading);
    };

    // check if text field are empty
    const handleEmpty = () => {
        setWarning(true);
    };

    // submit new post
    const handleSubmit = useCallback(async () => {
        await mutateAsync(processData());
        setCount((c) => c + 1);
        setUserText({ text: "" });
    }, [mutateAsync, processData]);

    return (
        <div>
            <div className='primary-color w-full shadow p-5 border-b-2 flex flex-col'>
                <div className='flex flex-row mb-3 items-center'>
                    {user ? (
                        <img
                            className='rounded-full border w-11 mr-2'
                            src={user.image as string}
                            alt='userimg'
                        ></img>
                    ) : (
                        ""
                    )}
                    <h2 className='text-color-p text-2xl'>New Post...</h2>
                </div>
                {!warning ? (
                    <NewPost
                        handleChange={handleChange}
                        value={userText.text}
                        inputRef={inputRef}
                    />
                ) : (
                    <WarningNewPost
                        handleChange={handleChange}
                        value={userText.text}
                        inputRef={inputRef}
                    />
                )}

                <div className='w-full flex flex-row flex-wrap justify-between flex-end items-stretch pt-3'>
                    <UploadImageButton setAssetData={setAssetData} />
                    {isEmpty ? (
                        <DisableButton />
                    ) : isLoading ? (
                        <LoadingButton handleSubmit={handleClick} />
                    ) : (
                        <SubmitButton handleSubmit={handleSubmit} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Usernewpost;
