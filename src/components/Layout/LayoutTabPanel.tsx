import { Tab } from "@headlessui/react";
import React, { FunctionComponent } from "react";
import { joinClassNames } from "../../services/common";

interface Props {
    children: React.ReactNode;
    title: string;
    desc: string;
}

const LayoutTabPanel: FunctionComponent<Props> = ({
    children,
    title,
    desc,
}) => {
    return (
        <Tab.Panel
            className={joinClassNames(
                "rounded-xl bg-white p-5",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
        >
            <h1 className='text-black text-xl'>{title}</h1>
            <p className='text-gray-500 text-sm '>{desc}</p>
            {children}
        </Tab.Panel>
    );
};

export default LayoutTabPanel;
