import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Login from "./Login/Login";
import { getSession } from "next-auth/react";

const login: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <Navbar />
            <Login />
        </>
    );
};

export default login;
