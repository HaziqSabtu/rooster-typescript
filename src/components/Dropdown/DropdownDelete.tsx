import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash } from "../../assets/icons";
import {
    selectDeleteModal,
    toggleOn,
    toggleOff,
} from "../../slices/SliceModalDelete";

interface Props {
    htmlFor: string;
    size: number;
    text: string;
}

// const DropdownDelete: FunctionComponent<Props> = ({ htmlFor, size, text }) => {
//     const href = `#${htmlFor}`;
//     return (
//         <a href={href} className='btn'>
//             <a className='cursor-pointer' data-modal-toggle='popup-modal'>
//                 <div className='flex flex-row items-center'>
//                     <Trash size={size} />
//                     <span className='ml-2 text-sm'>{text}</span>
//                 </div>
//             </a>
//         </a>
//     );
// };
const DropdownDelete: FunctionComponent<Props> = ({ htmlFor, size, text }) => {
    const href = `#${htmlFor}`;
    const deleteModalState = useSelector(selectDeleteModal);
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("deleteModalState", deleteModalState);
        deleteModalState ? dispatch(toggleOn()) : dispatch(toggleOff());
        // dispatch(toggleOn());
    };
    return (
        <label className='btn modal-button' onClick={handleClick}>
            <a className='cursor-pointer'>
                <div className='flex flex-row items-center'>
                    <Trash size={size} />
                    {deleteModalState ? (
                        <span className='ml-2 text-sm'>nah</span>
                    ) : (
                        <span className='ml-2 text-sm'>Delete</span>
                    )}
                </div>
            </a>
        </label>
    );
};

export default DropdownDelete;
