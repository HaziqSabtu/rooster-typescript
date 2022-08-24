import React, {
    FunctionComponent,
    MouseEventHandler,
    useCallback,
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
import { useSession } from "next-auth/react";

interface Props {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface UserText {
    text: string;
}

const Usernewpost: FunctionComponent<Props> = ({ setCount }) => {
    const { data: session, status } = useSession();
    const [userText, setUserText] = useState<UserText>({ text: "" });
    const [assetData, setAssetData] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [warning, setWarning] = useState<boolean>(false);

    const { mutateAsync } = trpc.useMutation(["post.create"]);

    const processData = () => {
        return {
            content: userText.text,
            image: null,
            userIDs: session?.user?.id as string,
        };
    };

    // log user input
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserText((oldVal) => {
            return {
                ...oldVal,
                [event.target.name]: event.target.value,
            };
        });

        if (userText.text.length <= 1) {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
            setWarning(false);
        }
    };

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
    }, [mutateAsync, processData]);

    return (
        <div>
            <div className='primary-color w-full shadow rounded-lg p-3 border-2 flex flex-col'>
                <h2 className='text-color-p mb-3 text-2xl'>New Post...</h2>
                {!warning ? (
                    <NewPost
                        handleChange={handleChange}
                        value={userText.text}
                    />
                ) : (
                    <WarningNewPost
                        handleChange={handleChange}
                        value={userText.text}
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
