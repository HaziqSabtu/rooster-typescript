import { signIn } from "next-auth/react";
import React, { FunctionComponent } from "react";

interface Props {
    // handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

const Signinin: FunctionComponent<Props> = () => {
    return (
        <button
            type='submit'
            onClick={() => signIn(undefined, { callbackUrl: "/" })}
            className='w-full inline-block px-7 py-3 secondary-color text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        >
            SIGNIGN
        </button>
    );
};

export default Signinin;
