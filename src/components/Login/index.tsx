import React, { FunctionComponent } from "react";
import Logo, { LogoLarge } from "../../assets/logo/Logo";
import LoginGitHub from "./LoginGitHub";
import LoginGoogle from "./LoginGoogle";

interface Props {}

const Login: FunctionComponent<Props> = ({}) => {
    const style = { backgroundColor: "#656399" };
    return (
        <div>
            <section className='h-screen'>
                <div className='container px-6 py-12 h-full'>
                    <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
                        <div className='md:w-8/12 lg:w-6/12 lg:items-start mb-12 md:mb-0 flex flex-col items-center'>
                            <LogoLarge width={650} />
                            <div className='flex flex-col space-y-8 items-start justify-start'>
                                <h1 className='font-mono text-7xl font-bold text-color-p tracking-wide'>
                                    Rooster!
                                </h1>
                                <h3 className='font-mono text-back text-5xl text-white'>
                                    A Platform to
                                </h3>
                                <div className='font-mono text-5xl flex space-x-3 '>
                                    <strong
                                        className=' text-white px-1'
                                        style={style}
                                    >
                                        Speak your mind{" "}
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-8/12 lg:w-5/12 lg:ml-20'>
                            <LoginGitHub />
                            <LoginGoogle />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
