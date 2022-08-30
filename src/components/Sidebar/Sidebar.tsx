import { getSession, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { boolean } from "zod";
import { User } from "next-auth";

const Sidebar = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User | undefined>();
    const { name, image } = user || {};

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            await getSession().then((session) => {
                setUser(session?.user);
            });
            setIsLoading(false);
        })();
    }, []);

    return user ? (
        <div className='flex flex-col border-x items-center primary-color w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg'>
            {
                <div className='p-5 primary-color sticky top-0'>
                    <img
                        className='rounded-lg place-content-center border border-color-p shadow-lg round'
                        src={image as string}
                        width={250}
                        height={250}
                        alt='userInfo'
                    />
                    <div className='pt-2 border-t mt-5 w-full text-center text-2xl font-bold text-color-p'>
                        @{name}
                    </div>
                </div>
            }
            <div className='w-full h-screen antialiased flex flex-col hover:cursor-pointer'>
                <a
                    className='hover:bg-gray-300 primary-color border-y p-3 w-full text-xl text-left text-color-p font-semibold'
                    href='setting'
                >
                    <i className='fa fa-cog text-color-p text-2xl pr-1 pt-1 float-right'></i>
                    Settings
                </a>
                <a
                    className='hover:bg-gray-300 primary-color border-b p-3 w-full text-xl text-left text-color-p font-semibold'
                    onClick={() => {
                        signOut();
                    }}
                >
                    <i className='fa fa-cog text-color-p text-2xl pr-1 pt-1 float-right'></i>
                    Log out
                </a>
            </div>
        </div>
    ) : (
        <div></div>
    );
};

export default Sidebar;
