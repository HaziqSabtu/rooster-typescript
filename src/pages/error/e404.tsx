import Image from "next/image";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { ErrorRooster } from "../../assets/icons";

interface Props {}

const e404: FunctionComponent<Props> = ({}) => {
    const router = useRouter();

    return (
        <div className='h-screen'>
            <div>
                <div className='flex items-center align-middle h-full'>
                    <ErrorRooster size={100} />
                    <h1 className='text-2xl'>HUH 404</h1>
                </div>
                <button
                    className='btn btn-primary btn-wide mt-4'
                    onClick={() => router.push("/")}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default e404;
