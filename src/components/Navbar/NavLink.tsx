import { signOut } from "next-auth/react";
import React, { FunctionComponent } from "react";

type Props = {
    href: string;
    id: string;
};

const NavLink: FunctionComponent<Props> = ({ href, id }) => {
    return (
        <a
            href={href}
            id={id}
            className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 text-color-t'
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
            className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 text-color-t'
        >
            {id}
        </a>
    );
};

export default NavLink;
