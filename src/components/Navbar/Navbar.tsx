import React, { useEffect } from "react";
import { useState } from "react";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import { FunctionComponent } from "react";
import NavButton from "./NavButton";
import { getSession } from "next-auth/react";
import { User } from "next-auth";

const Navbar: FunctionComponent = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [user, setUser] = useState<User | undefined>();
    // toggle navbar
    const handleToggle = () => {
        setIsHidden((state) => !state);
    };

    useEffect(() => {
        (async () => {
            await getSession().then((session) => {
                setUser(session?.user);
            });
        })();
    }, []);

    return (
        <nav
            className="secondary-color flex items-center justify-between flex-wrap p-6 cursor-pointer"
            id="navbar"
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
                {user ? (
                    <div>
                        <NavLink href="/setting" id="setting" />
                        <NavLink href="/logout" id="logout" />
                    </div>
                ) : (
                    <div>
                        <NavLink href="/register" id="register" />
                        <NavLink href="/login" id="login" />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
