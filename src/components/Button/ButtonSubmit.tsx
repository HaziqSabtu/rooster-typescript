import React, {
    ButtonHTMLAttributes,
    CSSProperties,
    FunctionComponent,
    MouseEventHandler,
} from "react";
import { joinClassNames } from "../../services/common";

interface Props {
    handleSubmit?: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    style?: CSSProperties;
    wide?: boolean;
    isDisabled?: boolean;
}

export const NormalButton: FunctionComponent<Props> = ({
    handleSubmit,
    text,
    style,
}) => {
    return (
        <button
            type='button'
            onClick={handleSubmit}
            className='w-44 text-sm transition ease-in-out delay-300 float-right fourth-color hover:-translate-y-0.5 hover:scale-110 hover:tertiary-color text-white p-2 rounded-lg'
            style={style}
        >
            {text}
        </button>
    );
};

export const NormalButton2: FunctionComponent<Props> = ({
    handleSubmit,
    text,
    style,
    wide,
    isDisabled,
}) => {
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
                "h-12 border border-gray-200 rounded-lg font-medium  text-sm px-5 py-2.5",
                !isDisabled
                    ? "text-gray-100 fourth-color hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-100 "
                    : "bg-inherit text-gray-400",
                wide ? "w-full" : ""
            )}
            // style={style}
        >
            <div className='flex justify-center'>
                <p>{text}</p>
            </div>
        </button>
    );
};

export const DisableButton: FunctionComponent<Props> = ({
    handleSubmit,
    text,
    style,
}) => {
    return (
        <button
            type='button'
            disabled={true}
            onClick={handleSubmit}
            className='w-44 absolute right-2.5 bottom-2.5 text-sm float-right disabled-color text-white p-0 rounded-lg'
            style={style}
        >
            {text}
        </button>
    );
};

export const SubmittedButton: FunctionComponent<Props> = ({
    handleSubmit,
    text,
    style,
}) => {
    return (
        <button
            type='button'
            disabled={true}
            onClick={handleSubmit}
            className='w-44 text-sm float-right text-white p-0 rounded-lg '
            style={style}
        >
            {text}
        </button>
    );
};

export const LoadingButton: FunctionComponent<Props> = ({
    handleSubmit,
    text,
    style,
}) => {
    return (
        <button
            type='button'
            disabled={true}
            onClick={handleSubmit}
            className='w-44 py-2.5 px-5 text-sm font-medium text-color-p bg-inherit rounded-lg  hover:bg-inherit hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center'
            style={style}
        >
            <svg
                role='status'
                className='inline m-auto w-4 h-4 text-gray-200 animate-spin dark:text-gray-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                />
                <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='#1C64F2'
                />
            </svg>
            {text}
        </button>
    );
};
