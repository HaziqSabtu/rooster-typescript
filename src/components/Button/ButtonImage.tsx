import React, { FunctionComponent } from "react";
import { joinClassNames } from "../../services/common";

interface Props {
    children: React.ReactNode;
    isDisabled?: boolean;
}

const ButtonImage: FunctionComponent<Props> = ({ children, isDisabled }) => {
    return (
        <div
            className={joinClassNames(
                "rounded-full p-1 hover:bg-violet-700 hover:bg-opacity-30 w-10 h-10 ",
                isDisabled ? "text-gray-500" : "text-violet-600"
            )}
        >
            {children}
        </div>
    );
};

export default ButtonImage;
