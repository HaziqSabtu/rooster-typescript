import React, { FunctionComponent, MouseEventHandler } from "react";
import { useState } from "react";

import UploadImageButton from "../../Button/ButtonUploadImage";
import {
    DisableButton,
    LoadingButton,
    SubmitButton,
} from "../../Button/ButtonSubmit";
import { NewPost, WarningNewPost } from "../../InputText/Inputtext.newpost";

interface Props {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface UserText {
    text: string;
}

// "baseUrl": "src",
// "paths": { "@/*": ["./src/*"] }

const Usernewpost: FunctionComponent<Props> = ({ setCount }) => {
    const [userText, setUserText] = useState<UserText>({ text: "" });
    const [assetData, setAssetData] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [warning, setWarning] = useState<boolean>(false);

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

    // // process request for new post
    // const processInput = () => {
    //     return {
    //         content: userText,
    //         image: assetData ? assetData.url : "",
    //     };
    // };

    // // submit post to database
    // const handleSubmit = async () => {
    //     await axios(createNewPost(processInput()))
    //         .then((response) => {
    //             navigate("/", { replace: true });
    //             setUserText("");
    //             setCount((c) => c + 1);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

    return (
        <div>
            <div className="primary-color w-full shadow rounded-lg p-5 border-2 flex flex-col">
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

                <div className="w-full flex flex-row flex-wrap justify-between flex-end items-stretch pt-2">
                    <UploadImageButton setAssetData={setAssetData} />
                    {isEmpty ? (
                        <DisableButton />
                    ) : isLoading ? (
                        <LoadingButton handleSubmit={handleClick} />
                    ) : (
                        <SubmitButton handleSubmit={handleClick} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Usernewpost;
