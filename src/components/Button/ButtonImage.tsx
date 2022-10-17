import React, { FunctionComponent } from "react";

interface Props {
    children: React.ReactNode;
}

const ButtonImage: FunctionComponent<Props> = ({ children }) => {
    return (
        <div className='rounded-full p-1 hover:bg-violet-700 hover:bg-opacity-30 w-10 h-10 text-violet-600'>
            {children}
        </div>
    );
};

export default ButtonImage;
