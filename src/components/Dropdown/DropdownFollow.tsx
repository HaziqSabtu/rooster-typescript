import React, { FunctionComponent } from "react";
import { FollowIcon } from "../../assets/icons";

interface Props {
    htmlFor: string;
    size: number;
    text: string;
}

const DropdownFollow: FunctionComponent<Props> = ({ htmlFor, size, text }) => {
    return (
        <>
            <label htmlFor={htmlFor} className='modal-button p-2'>
                <a className='cursor-pointer' data-modal-toggle='popup-modal'>
                    <div className='flex flex-row items-center'>
                        <FollowIcon size={size} />
                        <span className='ml-2 text-sm'>{text}</span>
                    </div>
                </a>
            </label>
        </>
    );
};

export default DropdownFollow;
