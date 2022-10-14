import React, { FunctionComponent } from "react";

interface Props {
    children: React.ReactNode;
}

const ButtonImage: FunctionComponent<Props> = ({ children }) => {
    return (
        <div className='rounded-full p-1 hover:bg-violet-600 hover:bg-opacity-30 w-10 h-10 text-violet-700'>
            {children}
        </div>
    );
};

export default ButtonImage;
