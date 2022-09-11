import { User } from "next-auth";
import React, { FunctionComponent, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Posts from "../Post/Posts";
import Sidebar from "../Sidebar/Sidebar";
import Usernewpost from "./components/Usernewpost";
import { HeadHome } from "../Head";

interface Props {}

const FP: FunctionComponent<Props> = () => {
    const [count, setCount] = React.useState<number>(0);
    return (
        <div>
            <HeadHome />
            <div className='h-screen overflow-hidden	'>
                <div className='sticky top-0 z-50'>
                    <Navbar />
                </div>
                <div className='w-full flex flex-row flex-wrap '>
                    <div className='w-full primary-color h-screen flex flex-row flex-wrap justify-center '>
                        <Sidebar />
                        <div className='xl:w-2/5 md:w-3/4 lg:w-4/5 py-5 md:px-12 lg:24 h-full w-full overflow-y-intial antialiased overflow-x-hidden'>
                            <Usernewpost setCount={setCount} />
                            <Posts
                                count={count}
                                setCount={setCount}
                                filter={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FP;
