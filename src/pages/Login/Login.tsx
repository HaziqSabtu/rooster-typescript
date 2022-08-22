import React, { ComponentFactory, FunctionComponent } from "react";
import { useState, useEffect, useRef, useContext } from "react";

import { client } from "../../../../roo4/src/client/client";
import { getUserByUserName } from "../../../../roo4/src/client/query";
import { AuthApi } from "../../../../roo4/src/api/AuthApi.js";
import { UserApi } from "../../../../roo4/src/api/UserApi";

// import Cookies from "js-cookie";
import axios from "axios";

import RedBanner from "./RedBanner";
import { setToken } from "../../services/token";

import { createSessionConfig } from "../../services/configApi";
import LoginForm from "./Loginform";
import Logo from "../../assets/logo/Logo";

const Login: FunctionComponent = () => {
    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
    });
    const [user, setUser] = useState(null);
    const isMounted = useRef(false);
    const Auth = useContext(AuthApi);
    const CurrentUser = useContext(UserApi);
    let [count, setCount] = useState(0);
    const [wrong, setWrong] = useState(false);

    // const onSubmit = (e) => {
    //     e.preventDefault();
    // };

    // logging every input from user
    const handleChange = (e: { target: { name: any; value: any } }) => {
        setUserInput((oldInput) => {
            return {
                ...oldInput,
                [e.target.name]: e.target.value,
            };
        });
    };

    //https://typeofnan.dev/how-to-prevent-useeffect-from-running-on-mount-in-react/
    //preventing useEffect being called at mount
    // useEffect(() => {
    //     if (isMounted.current) {
    //         const loginUser = async () => {
    //             const { name, ...rest } = userInput;
    //             console.log(createSessionConfig(rest));

    //             await axios(createSessionConfig(rest))
    //                 .then((response) => {
    //                     setToken(response.data);
    //                     setWrong(false);
    //                     Auth.setAuth(true); // ????????
    //                     // navigate("/", { replace: true });
    //                 })
    //                 .catch((error) => {
    //                     console.log(error);
    //                     setWrong(true);
    //                 });
    //         };
    //         loginUser();
    //     } else {
    //         isMounted.current = true;
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [count]);

    // const handleSubmit = () => {
    //     setCount((c) => c + 1);
    // };

    return (
        <div>
            <section className="h-screen primary-color">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center w-1000 lg:justify-center justify-center items-center flex-wrap h-full g-6">
                        <div className="flex flex-col justify-center items-center">
                            {wrong && <RedBanner />}
                            <Logo width={200} />
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
