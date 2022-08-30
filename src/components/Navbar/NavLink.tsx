import { signOut } from "next-auth/react";
import React, { FunctionComponent } from "react";

type Props = {
    href: string;
    id: string;
};

const style = {
    color: "#9e9aee",
};

const NavLink: FunctionComponent<Props> = ({ href, id }) => {
    return (
        <a
            href={href}
            id={id}
            style={style}
            className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4'
        >
            {id}
        </a>
    );
};

export const SignOut: FunctionComponent<Props> = ({ href, id }) => {
    return (
        <a
            onClick={() => signOut({ callbackUrl: "/" })}
            id={id}
            style={style}
            className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4'
        >
            {id}
        </a>
    );
};

export default NavLink;
