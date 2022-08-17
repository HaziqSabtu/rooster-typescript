import React, { FunctionComponent } from "react";
import Logo from "../../assets/logo/Logo";

const NavLogo: FunctionComponent = () => {
    return (
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Logo width={45} />
            <a href='/' className='font-semibold text-xl tracking-tight ml-2'>
                Rooster
            </a>
        </div>
    );
};

export default NavLogo;
