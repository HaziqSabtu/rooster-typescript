import React, { FunctionComponent } from "react";
import { HeadHome } from "../Head";
import Usernewpost from "../Main/components/Usernewpost";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

interface Props {
    children: React.ReactNode;
}

const LayoutMain: FunctionComponent<Props> = ({ children }) => {
    return (
        <div>
            <div className='h-screen overflow-hidden	'>
                <div className='sticky top-0 z-50'>
                    <Navbar />
                </div>
                <div className='w-full flex flex-row flex-wrap '>
                    <div className='w-full primary-color h-screen flex flex-row flex-wrap justify-center '>
                        <Sidebar />
                        <div className='xl:w-2/5 md:w-3/4 lg:w-4/5 py-5 md:px-12 lg:24 h-full w-full overflow-y-intial antialiased overflow-x-hidden'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutMain;
