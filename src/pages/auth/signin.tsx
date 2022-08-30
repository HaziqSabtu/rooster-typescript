import React, { FunctionComponent } from "react";
import Logo from "../../assets/logo/Logo";
import Login from "../../components/Login";

const signin: FunctionComponent = ({}) => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Login />
        </div>
    );
};

export default signin;
