import React, {
    DetailedHTMLProps,
    FunctionComponent,
    LabelHTMLAttributes,
} from "react";
import { RedAlert } from "../../assets/icons";

interface Props {
    handleClick?: () => void;
    htmlFor?: string;
}

const DeleteModal: FunctionComponent<Props> = ({ handleClick, htmlFor }) => {
    return (
        <>
            <input type='checkbox' id={htmlFor} className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box'>
                    <div className='flex flex-row items-start'>
                        <RedAlert size={45} />
                        <div className='ml-3 mt-2'>
                            <h3 className='font-bold text-2xl'>Delete Post</h3>
                            <p className='py-4 text-sm'>
                                Are you sure you want to delete this Post? This
                                action cannot be undone.
                            </p>
                            <div className='modal-action'>
                                <label
                                    htmlFor={htmlFor}
                                    className='btn btn-xs text-black bg-white border-none sm:btn-sm md:btn-md lg:btn-lg hover:bg-white'
                                >
                                    Cancel
                                </label>
                                <label
                                    htmlFor={htmlFor}
                                    // onClick={handleClick}
                                    className='btn btn-xs text-white bg-red-700 border-none sm:btn-sm md:btn-md lg:btn-lg hover:bg-red-700'
                                >
                                    Yes, I'm sure
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteModal;
