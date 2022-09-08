import React, { FunctionComponent } from "react";
import { HeadSignIn } from "../Head";
import LoginDiscord from "./LoginDiscord";
import LoginGitHub from "./LoginGitHub";
import LoginGoogle from "./LoginGoogle";
import LoginHero from "./LoginHero";

const Login: FunctionComponent = ({}) => {
    return (
        <div>
            <HeadSignIn />
            <section className='h-screen'>
                <div className='container px-6 py-12 h-full'>
                    <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
                        <LoginHero />
                        <div className='md:w-8/12 lg:w-5/12 lg:ml-20'>
                            <LoginGitHub />
                            <LoginGoogle />
                            <LoginDiscord />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
