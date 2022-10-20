import { FilmIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Main } from "next/document";
import React, { FunctionComponent } from "react";
import { ClipLoader } from "react-spinners";
import { joinClassNames } from "../../services/common";

interface Props {
    isLoading: boolean;
    isDisabled: boolean;
    isSubmitted: boolean;
    isWide: boolean;
    handleSubmit: () => void;
    text: String[];
    icon?: React.ReactElement;
}

const MainButton: FunctionComponent<Props> = ({
    isLoading,
    isDisabled,
    isSubmitted,
    handleSubmit,
    isWide,
    text,
    icon,
}) => {
    if (isLoading) {
        return (
            <button
                type='button'
                className={joinClassNames(
                    "rounded-lg font-medium  text-sm px-5 py-2.5 min-w-100",
                    "text-gray-100 bg-violet-600 ",
                    isDisabled
                        ? "opacity-50"
                        : "hover:bg-violet-700  focus:ring-4 focus:outline-none focus:ring-gray-100 ",
                    isWide ? "w-full" : "w-36"
                )}
            >
                <div className='flex justify-center'>
                    <ClipLoader
                        color={"#ffffff"}
                        loading={isLoading}
                        // cssOverride={override}
                        size={20}
                        aria-label='Loading Spinner'
                        data-testid='loader'
                    />
                    <p className='ml-2'>{text[2]}</p>
                </div>
            </button>
        );
    }
    return (
        <button
            type='button'
            disabled={isDisabled}
            onClick={
                !isDisabled
                    ? handleSubmit
                    : () => {
                          console.log("disabled");
                      }
            }
            className={joinClassNames(
                "rounded-lg font-medium  text-sm px-5 py-2.5",
                "text-gray-100 bg-violet-600 ",
                isDisabled
                    ? "opacity-50"
                    : "hover:bg-violet-700  focus:ring-4 focus:outline-none focus:ring-gray-100 ",
                isWide ? "w-full" : "w-36"
            )}
        >
            <div className='flex justify-center items-center gap-x-1'>
                {icon ? icon : null}
                <p>{!isSubmitted ? text[0] : text[1]}</p>
            </div>
        </button>
    );
};

export default MainButton;

interface ButtonProps {
    isLoading: boolean;
    isDisabled: boolean;
    isSubmitted: boolean;
    handleSubmit: () => void;
}

export const AddVideoButton: FunctionComponent<ButtonProps> = ({
    isLoading,
    isDisabled,
    isSubmitted,
    handleSubmit,
}) => {
    const text = ["Add Video", "Video Added", "Adding Video"];
    return (
        <MainButton
            isLoading={isLoading}
            isDisabled={isDisabled}
            isSubmitted={isSubmitted}
            isWide={true}
            handleSubmit={handleSubmit}
            text={text}
            icon={<FilmIcon className='h-6 w-6' />}
        />
    );
};

export const AddImageButton: FunctionComponent<ButtonProps> = ({
    isLoading,
    isDisabled,
    isSubmitted,
    handleSubmit,
}) => {
    const text = ["Add Image", "Image Added", "Adding Image"];
    return (
        <MainButton
            isLoading={isLoading}
            isDisabled={isDisabled}
            isSubmitted={isSubmitted}
            isWide={true}
            handleSubmit={handleSubmit}
            text={text}
            icon={<PhotoIcon className='h-6 w-6' />}
        />
    );
};
