import {
    ArrowLongRightIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { User } from "next-auth";
import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpdateUserImageInput } from "../../services/user";
import {
    selectCurrentUser,
    updateUserImage,
} from "../../slices/sliceCurrentUser";
import { selectCurrentSetting, setImage } from "../../slices/sliceSetting";
import { trpc } from "../../utils/trpc";
import { NormalButton2 } from "../Button/ButtonSubmit";
import UploadImageButton from "../Button/ButtonUploadImage";
import ImageProfile from "../Image/ImageProfile";
import LayoutTabPanel from "../Layout/LayoutTabPanel";

interface Props {
    title: string;
    desc: string;
    userData: User;
}

const SettingContentPP: FunctionComponent<Props> = ({
    title,
    desc,
    userData,
}) => {
    const { mutateAsync } = trpc.useMutation(["user.updateUserImage"]);
    const { image } = useSelector(selectCurrentSetting);
    const dispatch = useDispatch();

    const handleSubmit = useCallback(async () => {
        if (image.length > 0) {
            await mutateAsync(getUpdateUserImageInput(image[0] as string))
                .then((res) => {
                    console.log(res);
                    dispatch(updateUserImage(image[0] as string));
                })
                .catch((err: Error) => {
                    console.log(err.message);
                });
        }
    }, [mutateAsync, getUpdateUserImageInput, image]);

    return (
        <LayoutTabPanel title={title} desc={desc}>
            <div className='mt-5 flex items-center justify-center'>
                {userData ? (
                    <ImageProfile src={userData.image as string} size={16} />
                ) : null}
                <ArrowLongRightIcon className='h-8 w-8 mx-5' />
                {image.length > 0 ? (
                    <ImageProfile src={image[0] as string} size={16} />
                ) : (
                    <QuestionMarkCircleIcon className='h-18 w-20' />
                )}
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-44'>
                    <div className='mt-2'>
                        <UploadImageButton
                            limit={1}
                            image={image}
                            dispatchAction={setImage}
                        />
                    </div>
                    <div className='mt-2'>
                        <NormalButton2
                            text='Change Image'
                            handleSubmit={handleSubmit}
                            wide={true}
                            isDisabled={image.length === 0 ? true : false}
                        />
                    </div>
                </div>
            </div>
        </LayoutTabPanel>
    );
};

export default SettingContentPP;
