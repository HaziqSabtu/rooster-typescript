import React, { FunctionComponent } from "react";

interface Props {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputtextSetting: FunctionComponent<Props> = ({
    value,
    handleChange,
}) => {
    return (
        <input
            type='commentForm'
            autoComplete='off'
            id='commentForm'
            className='block p-4 rounded-lg w-full text-sm text-white border-gray-300  primary-color outline-none active:outline-dashed active:outline-2 active:outline-cyan-500'
            placeholder='Comment'
            onChange={handleChange}
            value={value}
            // ref={inputRef}
        />
    );
};

export default InputtextSetting;
