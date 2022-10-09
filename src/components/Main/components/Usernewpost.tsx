import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useRef,
} from "react";
import { useState } from "react";

import UploadImageButton from "../../Button/ButtonUploadImage";
import {
    DisableButton,
    LoadingButton,
    NormalButton,
    SubmittedButton,
} from "../../Button/ButtonSubmit";
import { NewPost, WarningNewPost } from "../../InputText/Inputtext.newpost";
import { trpc } from "../../../utils/trpc";
import { User } from "next-auth";
import { getPostCreateInput } from "../../../services/post";
import { sleep } from "../../../services/utils";
import { PImagePropfile } from "../../../assets/placeholder";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../slices/sliceCurrentUser";
import { useRouter } from "next/router";

interface Props {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface UserText {
    text: string;
}

const Usernewpost: FunctionComponent<Props> = ({ setCount }) => {
    const [userText, setUserText] = useState<UserText>({ text: "" });
    const [assetData, setAssetData] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isPosted, setIsPosted] = useState<boolean>(false);
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [warning, setWarning] = useState<boolean>(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const currentUser = useSelector(selectCurrentUser);

    const styleButton = {
        width: "176px",
    };

    const { mutateAsync } = trpc.useMutation(["post.create"]);
    const router = useRouter();

    // log user input
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserText((oldVal) => {
            return {
                ...oldVal,
                text: event.target.value,
            };
        });
    };

    const handleError = (error: string) => {
        if (error === "UNAUTHORIZED") {
            router.push("/error/e401");
        } else if (error === "FORBIDDEN") {
            router.push("/error/e403");
        } else if (error === "NOT_FOUND") {
            router.push("/error/e404");
        } else router.push("/error/e500");
    };

    useEffect(() => {
        if (inputRef.current?.value) {
            if (inputRef.current?.value.length === 0) {
                setIsEmpty(true);
            } else {
                setIsEmpty(false);
                setWarning(false);
                setIsPosted(false);
            }
        } else {
            setIsEmpty(true);
        }
    }, [inputRef.current?.value]);

    // submit new post
    // useCallback with processData as Dependancy
    // https://dmitripavlutin.com/dont-overuse-react-usecallback/
    const handleSubmit = useCallback(async () => {
        setIsLoading((state) => !state);
        await sleep(5000);
        console.log(
            getPostCreateInput(userText.text, assetData, currentUser!.id)
        );
        await mutateAsync(
            getPostCreateInput(userText.text, assetData, currentUser!.id)
        )
            .then(() => {
                setCount((c) => c + 1);
                setIsLoading((state) => !state);
                setIsPosted(true);
                setUserText({ text: "" });
            })
            .catch((err) => {
                handleError(err.message);
            });
    }, [mutateAsync, userText, currentUser, assetData]);

    return (
        <div>
            <div className='primary-color w-full p-5 border-b-2 flex flex-col'>
                <div className='flex flex-row mb-3 items-center '>
                    {currentUser ? (
                        currentUser.image ? (
                            <img
                                className='rounded-full w-11 animate-[bounce_3s_ease-in-out_infinite]'
                                src={currentUser.image as string}
                                alt='userImage'
                                width={44}
                                height={44}
                                // layout='fill'
                            />
                        ) : (
                            <PImagePropfile
                                size={44}
                                letter={currentUser?.name?.charAt(0) as string}
                            />
                        )
                    ) : (
                        ""
                    )}
                    <h2 className='text-color-s text-2xl ml-2'>New Post...</h2>
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

                <div className='w-full flex flex-row justify-between flex-end items-stretch pt-3'>
                    <UploadImageButton setAssetData={setAssetData} />
                    {isPosted ? (
                        <SubmittedButton
                            text={"Submitted"}
                            style={styleButton}
                        />
                    ) : isEmpty ? (
                        "" // <DisableButton text={"Submit"} style={styleButton} />
                    ) : isLoading ? (
                        <LoadingButton
                            text={"Submiting ..."}
                            style={styleButton}
                        />
                    ) : (
                        <NormalButton
                            handleSubmit={handleSubmit}
                            text={"Submit"}
                            style={styleButton}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Usernewpost;
