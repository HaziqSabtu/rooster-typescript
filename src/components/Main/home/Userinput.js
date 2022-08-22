import React, { useState } from "react";
import { useContext } from "react";

import { UserApi } from "../../api/UserApi";

import Usernewpost from "./Usernewpost";
import Posts from "./Posts";

import SmallSideBar from "../../components/SmallSideBar";
import Sidebar from "../../components/Sidebar";

const Userinput = () => {
    const { currentUser } = useContext(UserApi);
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className='w-full flex flex-row flex-wrap'>
                <div className='w-full primary-color h-screen flex flex-row flex-wrap justify-center '>
                    {currentUser ? (
                        <div className='z-50 secondary-color shadow-lg border-t-4 border-teal-500 absolute bottom-0 w-full md:w-0 md:hidden p-3'>
                            <SmallSideBar />
                        </div>
                    ) : (
                        ""
                    )}
                    <Sidebar />
                    <div className='xl:w-2/5 md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-y-intial antialiased overflow-x-hidden'>
                        <Usernewpost setCount={setCount} />
                        <Posts count={count} setCount={setCount} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userinput;
