import React, { FunctionComponent } from "react";
import Logo from "../../assets/logo/Logo";

interface Props {
    includeText?: boolean;
}

const N2Logo: FunctionComponent<Props> = ({ includeText }) => {
    return (
        <div className='flex items-center flex-shrink-0 px-0'>
            <Logo width={40} height={40} />
            {includeText ? (
                <h1 className='ml-2 text-4xl font-bold text-gray-900 title tracking-normal'>
                    Rooster
                </h1>
            ) : null}
        </div>
    );
};

export default N2Logo;
