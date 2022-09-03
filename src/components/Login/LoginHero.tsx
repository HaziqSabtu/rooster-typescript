import React, { FunctionComponent } from "react";
import { LogoLarge } from "../../assets/logo/Logo";

interface Props {}

const LoginHero: FunctionComponent<Props> = ({}) => {
    const style = { backgroundColor: "#656399" };
    return (
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
                    <strong className=' text-white px-1' style={style}>
                        Speak your mind{" "}
                    </strong>
                </div>
            </div>
        </div>
    );
};

export default LoginHero;
