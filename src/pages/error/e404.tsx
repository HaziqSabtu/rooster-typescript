import Image from "next/image";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { ErrorRooster } from "../../assets/icons";

interface Props {}

const Error404: FunctionComponent<Props> = ({}) => {
    const router = useRouter();

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center'>
                <ErrorRooster size={100} />
                <h1 className='text-2xl mt-4'>HUH... 404</h1>
                <h1 className='text-lg'>The page you requested is not found</h1>
                <button
                    className='btn btn-primary w-full mt-4'
                    onClick={() => router.push("/")}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default Error404;
