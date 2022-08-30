import React, { FunctionComponent } from "react";
import LoginGitHub from "./LoginGithub";
import LoginGoogle from "./LoginGoogle";

interface Props {}

const Login: FunctionComponent<Props> = ({}) => {
    return (
        <div>
            <LoginGitHub />
            <LoginGoogle />
        </div>
    );
};

export default Login;
