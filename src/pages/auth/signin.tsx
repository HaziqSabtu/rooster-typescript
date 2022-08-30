import React from "react";
import Logo from "../../assets/logo/Logo";
import Login from "../../components/Login";

type Props = {};

const signin = (props: Props) => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Login />
        </div>
    );
};

export default signin;
