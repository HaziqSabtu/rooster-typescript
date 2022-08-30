import React from "react";
import Logo from "../../assets/logo/Logo";

type Props = {};

const Loading = (props: Props) => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Logo width={200} />
        </div>
    );
};

export default Loading;
