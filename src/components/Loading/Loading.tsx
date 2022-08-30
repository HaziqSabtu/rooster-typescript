import React, { FunctionComponent } from "react";
import Logo from "../../assets/logo/Logo";

interface Props {}
const Loading: FunctionComponent<Props> = ({}) => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Logo width={200} />
        </div>
    );
};

export default Loading;
