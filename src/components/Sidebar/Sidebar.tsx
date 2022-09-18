import { getSession, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { User } from "next-auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { ForYouIcon, LogoutIcon, SettingIcon } from "../../assets/icons";

const Sidebar = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User | undefined>();
    const { name, image } = user || {};
    const router = useRouter();

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
        <div className='flex flex-col border-x items-center primary-color w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg sticky top-0 z-50'>
            {
                <div className='p-5 primary-color sticky top-0'>
                    <Image
                        className='rounded-lg place-content-center border border-color-p shadow-lg round'
                        src={image as string}
                        width={250}
                        height={250}
                        alt='userInfo'
                    />
                    <div className='pt-2 border-t mt-5 w-full text-center text-2xl font-bold text-color-p'>
                        <h1 className='text-white'>@{name}</h1>
                    </div>
                </div>
            }
            <div className='w-full h-screen antialiased flex flex-col hover:cursor-pointer'>
                <a
                    className='hover:bg-inherit primary-color text-color-t p-3 w-full text-xl text-left text-color-p font-semibold'
                    onClick={() => router.push("/foryoupage")}
                >
                    <div className='flex items-center'>
                        <ForYouIcon size={25} />
                        <h1 className='ml-2 text-white'>For You</h1>
                    </div>
                </a>
                <a
                    className='hover:bg-inherit primary-color text-color-t p-3 w-full text-xl text-left text-color-p font-semibold'
                    href='setting'
                >
                    <div className='flex items-center'>
                        <SettingIcon size={25} />
                        <h1 className='ml-2 text-white'>Setting</h1>
                    </div>
                </a>
                <a
                    className='hover:bg-inherit primary-color text-color-t p-3 w-full text-xl text-left text-color-p font-semibold'
                    onClick={() => {
                        signOut();
                    }}
                >
                    <div className='flex items-center'>
                        <LogoutIcon size={25} />
                        <h1 className='ml-2 text-white'>Log out</h1>
                    </div>
                </a>
            </div>
        </div>
    ) : (
        <div></div>
    );
};

export default Sidebar;
