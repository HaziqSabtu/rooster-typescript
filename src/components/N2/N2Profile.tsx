import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../slices/sliceCurrentUser";

interface Props {}

const N2Profile: FunctionComponent<Props> = ({}) => {
    const currentUser = useSelector(selectCurrentUser);
    const { name, image } = currentUser || {};
    return (
        <a href='#' className='flex-shrink-0 w-full group block'>
            <div className='flex items-center'>
                <div>
                    {image ? (
                        <img
                            className='inline-block h-9 w-9 rounded-full'
                            src={image}
                            alt=''
                        />
                    ) : null}
                </div>
                <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                        {name}
                    </p>
                    <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                        View profile
                    </p>
                </div>
            </div>
        </a>
    );
};

export default N2Profile;
