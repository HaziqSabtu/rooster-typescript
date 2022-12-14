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
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../slices/sliceCurrentUser";
import { useRouter } from "next/router";
import ImageProfile from "../../Image/ImageProfile";
import MainButton from "../../Button/ButtonMain";
import { FilmIcon, PhotoIcon } from "@heroicons/react/24/outline";
import ButtonImage from "../../Button/ButtonImage";
// import ButtonWithPopOver from "../../Layout/LayoutPopOver";
import AddImage from "./AddImage";
import AddVideo from "./AddVideo";
import {
    selectCurrentPost,
    setContent,
    setPostInitialState,
} from "../../../slices/sliceNewPost";

interface Props {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface UserText {
    text: string;
}

const Usernewpost: FunctionComponent<Props> = ({ setCount }) => {
    const [userText, setUserText] = useState<UserText>({ text: "" });
    const [assetData, setAssetData] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [warning, setWarning] = useState<boolean>(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const currentUser = useSelector(selectCurrentUser);

    const { mutateAsync } = trpc.useMutation(["post.create"]);
    const router = useRouter();

    const { content, image, video } = useSelector(selectCurrentPost);
    const dispatch = useDispatch();

    // log user input
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setContent(event.target.value));
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
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
                setWarning(false);
                setIsSubmitted(false);
            }
        } else {
            setIsDisabled(true);
        }
    }, [inputRef.current?.value]);

    // submit new post
    // useCallback with processData as Dependancy
    // https://dmitripavlutin.com/dont-overuse-react-usecallback/
    const handleSubmit = useCallback(async () => {
        if (!content) return;
        setIsLoading((state) => !state);
        await sleep(2000);

        await mutateAsync(
            getPostCreateInput(content, image, video, currentUser!.id)
        )
            .then(() => {
                setCount((c) => c + 1);
                setIsLoading((state) => !state);
                setIsSubmitted(true);
                dispatch(setPostInitialState());
            })
            .catch((err) => {
                handleError(err.message);
            });
    }, [mutateAsync, currentUser, content, video, image]);

    return (
        <div>
            <div className='primary-color w-full p-5 border-b-2 flex flex-col'>
                <div className='flex flex-row mb-3 items-center'>
                    {currentUser ? (
                        currentUser.image ? (
                            <ImageProfile
                                src={currentUser.image as string}
                                size={6}
                                alt={"newPost"}
                                className='animate-[bounce_3s_ease-in-out_infinite]'
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
                        value={content}
                        inputRef={inputRef}
                    />
                ) : (
                    <WarningNewPost
                        handleChange={handleChange}
                        value={content}
                        inputRef={inputRef}
                    />
                )}

                <div className='w-full flex flex-row justify-between flex-end items-center pt-3'>
                    <div className='flex ml-2 gap-3'>
                        <AddImage />
                        <AddVideo />
                    </div>

                    <MainButton
                        isLoading={isLoading}
                        isDisabled={isDisabled}
                        isSubmitted={isSubmitted}
                        text={["Submit", "Submitted", "Submitting"]}
                        isWide={false}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Usernewpost;
