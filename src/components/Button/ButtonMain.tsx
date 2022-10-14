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
}

const MainButton: FunctionComponent<Props> = ({
    isLoading,
    isDisabled,
    isSubmitted,
    handleSubmit,
    isWide,
    text,
}) => {
    if (isLoading) {
        return (
            <button
                type='button'
                className={joinClassNames(
                    "rounded-lg font-medium  text-sm px-5 py-2.5 min-w-100 w-36",
                    "text-gray-100 bg-violet-600 ",
                    isDisabled
                        ? "opacity-50"
                        : "hover:bg-violet-700  focus:ring-4 focus:outline-none focus:ring-gray-100 ",
                    isWide ? "w-full" : ""
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
                "rounded-lg font-medium  text-sm px-5 py-2.5 w-36",
                "text-gray-100 bg-violet-600 ",
                isDisabled
                    ? "opacity-50"
                    : "hover:bg-violet-700  focus:ring-4 focus:outline-none focus:ring-gray-100 ",
                isWide ? "w-full" : ""
            )}
        >
            <div className='flex justify-center'>
                <p>{!isSubmitted ? text[0] : text[1]}</p>
            </div>
        </button>
    );
};

export default MainButton;
