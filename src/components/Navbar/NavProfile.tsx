import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../slices/sliceCurrentUser";
import ImageProfile from "../Image/ImageProfile";

interface Props {}

const NavProfile: FunctionComponent<Props> = ({}) => {
    const currentUser = useSelector(selectCurrentUser);
    const { name, image } = currentUser || {};
    return (
        <a href='#' className='flex-shrink-0 w-full group block primary-color'>
            <div className='flex items-center'>
                <div>
                    {image ? <ImageProfile src={image} size={8} /> : null}
                </div>
                <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-200 group-hover:text-gray-100'>
                        {name}
                    </p>
                    <p className='text-xs font-medium text-gray-400 group-hover:text-gray-500'>
                        View profile
                    </p>
                </div>
            </div>
        </a>
    );
};

export default NavProfile;
