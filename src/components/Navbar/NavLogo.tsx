import React, { FunctionComponent } from "react";
import Logo from "../../assets/logo/Logo";

const NavLogo: FunctionComponent = () => {
    return (
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Logo width={45} height={45} />
            <a href='/' className='font-semibold text-xl tracking-tight ml-2'>
                <span className='text-3xl'>R</span>
                <span>ooster</span>
            </a>
        </div>
    );
};

export default NavLogo;
