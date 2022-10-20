import React, { FunctionComponent } from "react";
import { joinClassNames } from "../../services/common";

interface Props {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    border?: boolean;
    placeholder?: string;
    isDisabled?: boolean;
}

const InputtextSetting: FunctionComponent<Props> = ({
    value,
    handleChange,
    border,
    placeholder,
    isDisabled,
}) => {
    return (
        <input
            type='commentForm'
            autoComplete='off'
            id='commentForm'
            disabled={isDisabled ? true : false}
            className={joinClassNames(
                "block p-4 rounded-lg w-full text-sm text-white primary-color outline-none active:outline-dashed active:outline-2 active:outline-cyan-500",
                border ? "border border-gray-300" : ""
            )}
            placeholder={placeholder ? placeholder : "Enter your comment"}
            onChange={handleChange}
            value={value}
            // ref={inputRef}
        />
    );
};

export default InputtextSetting;
