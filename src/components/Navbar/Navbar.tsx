import React from "react";
import { useState, useContext } from "react";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import { FunctionComponent } from "react";
// import { useNavigate } from "react-router-dom";

import { AuthApi } from "../../../../roo4/src/api/AuthApi";

import logo from "../assets/logo.png";
import NavButton from "./NavButton";

const Navbar: FunctionComponent = () => {
    const [isHidden, setIsHidden] = useState(true);
    // const { auth } = useContext(AuthApi);
    // const navigate = useNavigate();

    // toggle navbar
    const handleToggle = () => {
        setIsHidden((state) => !state);
    };

    // const handleTitle = () => {
    //     navigate("/", { replace: true });
    // };

    return (
        <div>
            <nav
                className='secondary-color flex items-center justify-between flex-wrap p-6 cursor-pointer'
                id='navbar'
            >
                <NavLogo />
                <NavButton handleToggle={handleToggle} />

                <div
                    className={
                        isHidden
                            ? "hidden w-full flex-grow lg:flex lg:items-center lg:w-auto"
                            : "block w-full flex-grow lg:flex lg:items-center lg:w-auto"
                    }
                >
                    {/* render component only if authenticated */}
                    {/* {auth && (
                        <div>
                            <a
                                href='/setting'
                                id='setting'
                                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
                            >
                                Setting
                            </a>
                            <a
                                href='/logout'
                                id='logout'
                                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
                            >
                                Logout
                            </a>
                        </div>
                    )} */}

                    {/* render component only if NOT authenticated */}

                    <div>
                        <NavLink href='/register' id='register' />
                        <NavLink href='/login' id='login' />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
