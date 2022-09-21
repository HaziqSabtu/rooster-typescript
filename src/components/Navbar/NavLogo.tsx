import React, { FunctionComponent } from "react";
import Logo from "../../assets/logo/Logo";

interface Props {
    includeText?: boolean;
}

const NavLogo: FunctionComponent<Props> = ({ includeText }) => {
    return (
        <div className='flex items-center flex-shrink-0 px-0 primary-color'>
            <a href='/home' className='flex'>
                <Logo width={32} height={32} />
                {includeText ? (
                    <h1 className='ml-1 text-3xl font-bold text-gray-400 title tracking-normal'>
                        rooster
                    </h1>
                ) : null}
            </a>
        </div>
    );
};

export default NavLogo;
