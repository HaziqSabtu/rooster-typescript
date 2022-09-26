import { signIn } from "next-auth/react";
import React, { FunctionComponent } from "react";
import { GitHubIcon } from "../../assets/icons";

const LoginGitHub: FunctionComponent = ({}) => {
    return (
        <div className='flex flex-row items-center mt-3'>
            <button
                className='btn btn-wide'
                onClick={() => signIn("github", { callbackUrl: "/home" })}
            >
                <GitHubIcon size={30} />
                <span className='text-white'>Login with GitHub</span>
            </button>
        </div>
    );
};

export default LoginGitHub;
