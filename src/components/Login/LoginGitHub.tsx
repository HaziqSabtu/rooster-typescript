import { signIn } from "next-auth/react";
import React, { FunctionComponent } from "react";
import { GitHubIcon } from "../../assets/icons";

interface Props {}

const LoginGitHub: FunctionComponent<Props> = ({}) => {
    return (
        <div className='flex flex-row items-center'>
            <button
                className='btn btn-wide'
                onClick={() => signIn("github", { callbackUrl: "/" })}
            >
                <GitHubIcon size={30} />
                <span className='text-white'>Login with GitHub</span>
            </button>
        </div>
    );
};

export default LoginGitHub;
