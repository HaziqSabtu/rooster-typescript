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
import React, { Fragment, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../slices/sliceCurrentUser";
import N2List from "./N2List";
import N2Logo from "./N2Logo";
import N2Profile from "./N2Profile";

const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    { name: "Teams", href: "#", icon: UserGroupIcon, current: false },
    { name: "Directory", href: "#", icon: MagnifyingGlassIcon, current: false },
    { name: "Office Map", href: "#", icon: MapIcon, current: false },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

const N2: FunctionComponent = ({}) => {
    return (
        <div className='flex flex-col w-64'>
            <div className='flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100'>
                <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
                    <N2Logo includeText={true} />
                    <nav className='mt-5 flex-1' aria-label='Sidebar'>
                        <N2List
                            classNames={classNames}
                            navigation={navigation}
                        />
                    </nav>
                </div>
                <div className='flex-shrink-0 flex border-t border-gray-200 p-4'>
                    <N2Profile />
                </div>
            </div>
        </div>
    );
};

export default N2;

interface IN2Small {
    setSidebarOpen: (arg0: boolean) => void;
    sidebarOpen: boolean;
}

export const N2Small: FunctionComponent<IN2Small> = ({
    setSidebarOpen,
    sidebarOpen,
}) => {
    const currentUser = useSelector(selectCurrentUser);
    const { name, image } = currentUser || {};
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
                                    <XCircleIcon
                                        className='h-6 w-6 text-white'
                                        aria-hidden='true'
                                    />
                                </button>
                            </div>
                        </Transition.Child>
                        <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
                            <div className='flex-shrink-0 flex items-center px-4'>
                                <N2Logo includeText={true} />
                            </div>
                            <nav aria-label='Sidebar' className='mt-5'>
                                <div className='px-2 space-y-1'>
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                            )}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current
                                                        ? "text-gray-500"
                                                        : "text-gray-400 group-hover:text-gray-500",
                                                    "mr-4 h-6 w-6"
                                                )}
                                                aria-hidden='true'
                                            />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </div>
                        <div className='flex-shrink-0 flex border-t border-gray-200 p-4'>
                            <N2Profile />
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
