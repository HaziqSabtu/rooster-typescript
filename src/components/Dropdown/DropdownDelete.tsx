import React, { FunctionComponent } from "react";
import { Trash } from "../../assets/icons";

interface Props {
    htmlFor: string;
    size: number;
    text: string;
}

const DropdownDelete: FunctionComponent<Props> = ({ htmlFor, size, text }) => {
    const href = `#${htmlFor}`;
    return (
        <>
            <a href={href} className='btn'>
                {/* <a className='cursor-pointer' data-modal-toggle='popup-modal'> */}
                <div className='flex flex-row items-center'>
                    <Trash size={size} />
                    <span className='ml-2 text-sm'>{text}</span>
                </div>
                {/* </a> */}
            </a>
        </>
    );
};

export default DropdownDelete;
