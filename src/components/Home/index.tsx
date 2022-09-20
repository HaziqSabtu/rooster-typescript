/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    CalendarIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    MapIcon,
    SpeakerWaveIcon,
    UserGroupIcon,
    XCircleIcon,
} from "@heroicons/react/24/outline";
import N2, { N2Small } from "../../components/N2";
import N2Logo from "../N2/N2Logo";

const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    { name: "Teams", href: "#", icon: UserGroupIcon, current: false },
    { name: "Directory", href: "#", icon: MagnifyingGlassIcon, current: false },
    {
        name: "Announcements",
        href: "#",
        icon: SpeakerWaveIcon,
        current: false,
    },
    { name: "Office Map", href: "#", icon: MapIcon, current: false },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function Homee() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
            <div className='h-screen flex'>
                <N2Small
                    setSidebarOpen={setSidebarOpen}
                    sidebarOpen={sidebarOpen}
                />
                {/* Static sidebar for desktop */}
                <div className='hidden lg:flex lg:flex-shrink-0'>
                    <N2 />
                </div>
                <div className='flex flex-col min-w-0 flex-1 overflow-hidden'>
                    <div className='lg:hidden'>
                        <div className='flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5'>
                            <div>
                                <N2Logo />
                            </div>
                            <div>
                                <button
                                    type='button'
                                    className='-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900'
                                    onClick={() => setSidebarOpen(true)}
                                >
                                    <span className='sr-only'>
                                        Open sidebar
                                    </span>
                                    <Bars3Icon
                                        className='h-6 w-6'
                                        aria-hidden='true'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 relative z-0 flex overflow-hidden'>
                        <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last max-w-2xl'>
                            {/* Start main area*/}
                            <div className='absolute inset-0 py-6 px-4 sm:px-6 lg:px-8'>
                                <div className='h-full border-2 border-gray-200 border-dashed rounded-lg' />
                            </div>
                            {/* End main area */}
                        </main>
                        <aside className='hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto'>
                            {/* Start secondary column (hidden on smaller screens) */}
                            <div className='absolute inset-0 py-6 px-4 sm:px-6 lg:px-8'>
                                <div className='h-full border-2 border-gray-200 border-dashed rounded-lg' />
                            </div>
                            {/* End secondary column */}
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
