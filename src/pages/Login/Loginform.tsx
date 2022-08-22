import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Inputtext from "@/components/InputText/Inputtext";
import { createSessionConfig } from "../../services/configApi";
import axios from "axios";
import { createHealthConfig } from "../../services/healthApi";
import { signIn } from "next-auth/react";
import Signinin from "../../components/Button/singinin";

interface Props {}

interface userInput {
    email: string;
    password: string;
}

const LoginForm: FunctionComponent<Props> = () => {
    const isMounted = useRef(false);
    const [count, setCount] = useState<number>(0);
    const [userInput, setUserInput] = useState<userInput>({
        email: "",
        password: "",
    });

    // logging every input from user
    const handleChange = (e: { target: { name: any; value: any } }) => {
        setUserInput((oldInput) => {
            return {
                ...oldInput,
                [e.target.name]: e.target.value,
            };
        });
    };

    useEffect(() => {
        if (isMounted.current) {
            const loginUser = async () => {
                await axios(createSessionConfig(userInput))
                    .then((response) => {
                        console.log(response);
                        console.log(response.data);
                        // signIn();
                        // setToken(response.data);
                        // setWrong(false);
                        // Auth.setAuth(true); // ????????
                        // navigate("/", { replace: true });
                    })
                    .catch((error) => {
                        console.log(error);
                        // setWrong(true);
                    });
            };
            loginUser();
            console.log("submitting");
            console.log(userInput);
        } else {
            isMounted.current = true;
        }
    }, [count]);

    const handleSubmit = () => {
        setCount((c) => c + 1);
    };
    return (
        <>
            {" "}
            <form onSubmit={(e) => e.preventDefault()}>
                <Inputtext value="email" handleChange={handleChange} />
                <Inputtext value="password" handleChange={handleChange} />
                <Button handleSubmit={handleSubmit} />
            </form>
            <Signinin />
        </>
    );
};

export default LoginForm;
