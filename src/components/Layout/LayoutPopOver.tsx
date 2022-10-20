import React, { FunctionComponent, LegacyRef, useState } from "react";

interface Props {
    children: React.ReactNode;
}

import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ButtonImage from "../Button/ButtonImage";
import { usePopper } from "react-popper";

interface Props {
    children: React.ReactNode;
    icon: React.ReactNode;
    title: string;
    desc: string;
    isDisabled?: boolean;
    isCircle?: boolean;
}

export const LayoutPopOver: FunctionComponent<Props> = ({
    children,
    icon,
    title,
    desc,
    isDisabled,
    isCircle,
}) => {
    const [referenceElement, setReferenceElement] = useState();
    const [popperElement, setPopperElement] = useState();
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom-start",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 10],
                },
            },
            {
                name: "computeStyles",
                options: {
                    adaptive: false, // true by default
                },
            },
        ],
    });
    return (
        <div className='w-full max-w-sm '>
            <Popover className='relative'>
                <Popover.Button
                    ref={
                        setReferenceElement as unknown as
                            | LegacyRef<HTMLButtonElement>
                            | undefined
                    }
                    disabled={isDisabled}
                >
                    <ButtonImage isDisabled={isDisabled}>{icon}</ButtonImage>
                    {isCircle && (
                        <div className='rounded-full absolute bg-violet-500 w-2 h-2 top-1.5 right-1'></div>
                    )}
                </Popover.Button>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                >
                    <Popover.Panel
                        className='primary-color z-10 shadow p-5 rounded-lg shadow-violet-600 min-w-max'
                        ref={
                            setPopperElement as unknown as
                                | LegacyRef<HTMLDivElement>
                                | undefined
                        }
                        style={styles.popper}
                    >
                        <h1 className='text-gray-100 text-2xl'>{title}</h1>
                        <p className='text-gray-400 text-sm'>{desc}</p>
                        {children}
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    );
};
