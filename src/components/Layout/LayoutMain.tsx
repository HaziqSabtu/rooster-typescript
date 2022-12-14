import React, { FunctionComponent, useState } from "react";
import { SideBarMain, SideBarSmall, NavBarSmall } from "../Navbar";

interface Props {
    children: React.ReactNode;
}

const LayoutMain: FunctionComponent<Props> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className='h-screen flex justify-center'>
                {/* Sidebar with Transition */}
                <SideBarSmall
                    setSidebarOpen={setSidebarOpen}
                    sidebarOpen={sidebarOpen}
                />
                {/* Static sidebar for desktop */}
                <div className='hidden lg:flex lg:flex-shrink-0'>
                    <SideBarMain />
                </div>
                <div className='flex flex-col min-w-0 max-w-4xl flex-1 overflow-hidden'>
                    {/* Navbar for Mobile */}
                    <NavBarSmall setSidebarOpen={setSidebarOpen} />
                    {/* Content */}
                    <div className='flex-1 relative z-0 flex overflow-hidden'>
                        <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last max-w-2xl'>
                            <div className='absolute inset-0 py-6 px-4 sm:px-6 lg:px-8'>
                                {children}
                            </div>
                        </main>
                        {/* <aside className='hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto'> */}
                        {/* Start secondary column (hidden on smaller screens) */}
                        {/* <div className='absolute inset-0 py-6 px-4 sm:px-6 lg:px-8'>
                                <div className='h-full border-2 border-gray-200 border-dashed rounded-lg' />
                            </div> */}
                        {/* End secondary column */}
                        {/* </aside> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutMain;
