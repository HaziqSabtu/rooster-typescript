import { signIn } from "next-auth/react";
import React, { FunctionComponent } from "react";
import { DiscordIcon } from "../../assets/icons";

const LoginDiscord: FunctionComponent = ({}) => {
    return (
        <div className='flex flex-row items-center mt-3'>
            <button
                className='btn btn-wide bg-[#7289DA] border-none hover:bg-[#7289DA]'
                onClick={() => signIn("discord", { callbackUrl: "/home" })}
            >
                <DiscordIcon size={27} />
                <span className='text-white ml-1'>only in dev</span>
            </button>
        </div>
    );
};

export default LoginDiscord;
