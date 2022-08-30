import { signIn } from "next-auth/react";
import React, { FunctionComponent } from "react";
import { GoogleIcon } from "../../assets/icons";

const LoginGoogle: FunctionComponent = ({}) => {
    return (
        <div className='flex flex-row items-center mt-3'>
            <button
                className='btn btn-wide'
                onClick={() => signIn("google", { callbackUrl: "/" })}
            >
                <GoogleIcon size={23} />
                <span className='ml-1 text-white'>Login with Google</span>
            </button>
        </div>
    );
};

export default LoginGoogle;
