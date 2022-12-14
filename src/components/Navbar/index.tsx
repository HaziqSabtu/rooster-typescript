import { Dialog, Transition } from "@headlessui/react";
import {
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    Cog6ToothIcon,
    FaceSmileIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { Fragment, FunctionComponent } from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import NavProfile from "./NavProfile";

const navItem = [
    { name: "Home", href: "/home", icon: HomeIcon, current: false },
    {
        name: "For you",
        href: "/foryoupage",
        icon: FaceSmileIcon,
        current: false,
    },
    {
        name: "Search",
        href: "/search",
        icon: MagnifyingGlassIcon,
        current: false,
    },
    { name: "Setting", href: "/setting", icon: Cog6ToothIcon, current: false },
    {
        name: "Log out",
        href: "/setting",
        icon: ArrowRightOnRectangleIcon,
        current: false,
    },
];

function processPath(path: string) {
    return navItem.map((item) => {
        item.href === path ? (item.current = true) : (item.current = false);
        return item;
    });
}

function classNames(...classes: [string]) {
    return classes.filter(Boolean).join(" ");
}

export const SideBarMain: FunctionComponent = ({}) => {
    const router = useRouter();
    return (
        <div className='flex flex-col w-64'>
            <div className='flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100'>
                <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto primary-color'>
                    <NavLogo includeText={true} />
                    <nav className='mt-5 flex-1' aria-label='Sidebar'>
                        <NavList
                            classNames={classNames}
                            navItem={processPath(router.pathname)}
                        />
                    </nav>
                </div>
                <div className='flex-shrink-0 flex border-gray-200 p-4 primary-color'>
                    <NavProfile />
                </div>
            </div>
        </div>
    );
};

interface ISideBarSmall {
    setSidebarOpen: (arg0: boolean) => void;
    sidebarOpen: boolean;
}

export const SideBarSmall: FunctionComponent<ISideBarSmall> = ({
    setSidebarOpen,
    sidebarOpen,
}) => {
    const router = useRouter();
    return (
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
                as='div'
                className='fixed inset-0 flex z-40 lg:hidden'
                onClose={setSidebarOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter='transition-opacity ease-linear duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition-opacity ease-linear duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter='transition ease-in-out duration-300 transform'
                    enterFrom='-translate-x-full'
                    enterTo='translate-x-0'
                    leave='transition ease-in-out duration-300 transform'
                    leaveFrom='translate-x-0'
                    leaveTo='-translate-x-full'
                >
                    <div className='relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-in-out duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in-out duration-300'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <div className='absolute top-0 right-0 -mr-12 pt-2'>
                                <button
                                    type='button'
                                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <span className='sr-only'>
                                        Close sidebar
                                    </span>
                                    <XMarkIcon
                                        className='h-6 w-6 text-white'
                                        aria-hidden='true'
                                    />
                                </button>
                            </div>
                        </Transition.Child>
                        <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto primary-color'>
                            <div className='flex-shrink-0 flex items-center px-4'>
                                <NavLogo includeText={true} />
                            </div>
                            <nav aria-label='Sidebar' className='mt-5'>
                                <NavList
                                    classNames={classNames}
                                    navItem={processPath(router.pathname)}
                                />
                            </nav>
                        </div>
                        <div className='flex-shrink-0 flex border-gray-200 p-4 primary-color'>
                            <NavProfile />
                        </div>
                    </div>
                </Transition.Child>
                <div className='flex-shrink-0 w-14' aria-hidden='true'>
                    {/* Force sidebar to shrink to fit close icon */}
                </div>
            </Dialog>
        </Transition.Root>
    );
};

interface INavBarSmall {
    setSidebarOpen: (arg0: boolean) => void;
}
export const NavBarSmall: FunctionComponent<INavBarSmall> = ({
    setSidebarOpen,
}) => {
    return (
        <div className='lg:hidden '>
            <div className='flex items-center justify-between primary-color px-4 py-1.5 '>
                <div>
                    <NavLogo />
                </div>
                <div>
                    <button
                        type='button'
                        className='-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900'
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className='sr-only'>Open sidebar</span>
                        <Bars3Icon
                            className='h-6 w-6 text-violet-600'
                            aria-hidden='true'
                            // color='#656399'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export const NavBarLP: FunctionComponent = ({}) => {
    return (
        <div className=' '>
            <div className='flex items-center justify-between primary-color px-4 py-1.5 '>
                <div>
                    <NavLogo includeText={true} />
                </div>
                <div>
                    <a
                        href='#'
                        className='ml-8 whitespace-nowrap inline-flex items-center justify-center fourth-color bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white'
                    >
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    );
};
