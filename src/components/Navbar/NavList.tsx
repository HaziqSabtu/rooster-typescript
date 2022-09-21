import React, { FunctionComponent, HTMLAttributes } from "react";

interface INavigate {
    name: string;
    href: string;
    icon: React.ElementType;
    current: boolean;
}

interface Props {
    navItem: Array<INavigate>;
    classNames: (arg0: string, arg1: string) => string;
}

const NavList: FunctionComponent<Props> = ({ navItem, classNames }) => {
    return (
        <div className='px-2 space-y-1 primary-color'>
            {navItem.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-200 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                >
                    <item.icon
                        className={classNames(
                            item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 h-6 w-6"
                        )}
                        aria-hidden='true'
                    />
                    {item.name}
                </a>
            ))}
        </div>
    );
};

export default NavList;
