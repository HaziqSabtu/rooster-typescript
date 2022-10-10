import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, FunctionComponent } from "react";
import Image from "next/image";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementImageIndex,
    incrementImageIndex,
    selectCurrentImageArray,
    selectCurrentImageIndex,
    selectCurrentImageModalState,
    setCloseModal,
} from "../../slices/sliceModalImage";

interface Props {}

const ImageModal: FunctionComponent<Props> = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector(selectCurrentImageModalState);
    const imageArray = useSelector(selectCurrentImageArray);
    const imageIndex = useSelector(selectCurrentImageIndex);
    const currentImage = imageArray[imageIndex];

    const closeModal = () => {
        dispatch(setCloseModal());
    };

    const incrementImg = () => {
        dispatch(incrementImageIndex());
    };

    const decrementImg = () => {
        dispatch(decrementImageIndex());
    };
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto noselect'>
                    <div className='flex min-h-full items-center justify-center text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-screen h-screen transform overflow-hidden text-left align-middle shadow-xl transition-all '>
                                <div className='flex justify-between items-center max-w-screen h-screen p-5'>
                                    <a
                                        className='h-10 w-10 absolute top-10 right-10'
                                        onClick={closeModal}
                                    >
                                        <XMarkIcon />
                                    </a>
                                    <a
                                        className='mx-5 h-10 w-10'
                                        onClick={decrementImg}
                                    >
                                        <ChevronLeftIcon />
                                    </a>
                                    <div className='relative w-full h-full'>
                                        <Image
                                            className=''
                                            src={currentImage as string}
                                            alt='Imagepost'
                                            layout={"fill"}
                                            objectFit={"contain"}
                                        ></Image>
                                    </div>
                                    <a
                                        className='mx-5 h-10 w-10'
                                        onClick={incrementImg}
                                    >
                                        <ChevronRightIcon />
                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ImageModal;
