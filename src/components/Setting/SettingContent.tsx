import {
    ArrowLongRightIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { User } from "next-auth";
import React, { FunctionComponent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { getUpdateUserImageInput } from "../../services/user";
import { updateUserImage } from "../../slices/sliceCurrentUser";
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
    const [assetData, setAssetData] = useState<string[]>([]);

    const { mutateAsync } = trpc.useMutation(["user.updateUserImage"]);
    const dispatch = useDispatch();

    const handleSubmit = useCallback(async () => {
        if (assetData.length > 0) {
            await mutateAsync(getUpdateUserImageInput(assetData[0] as string))
                .then((res) => {
                    console.log(res);
                    dispatch(updateUserImage(assetData[0] as string));
                })
                .catch((err: Error) => {
                    console.log(err.message);
                });
        }
    }, [mutateAsync, getUpdateUserImageInput, assetData]);

    return (
        <LayoutTabPanel title={title} desc={desc}>
            <div className='mt-5 flex items-center justify-center'>
                <ImageProfile src={userData?.image as string} size={16} />
                <ArrowLongRightIcon className='h-8 w-8 mx-5' />
                {assetData.length > 0 ? (
                    <ImageProfile src={assetData[0] as string} size={16} />
                ) : (
                    <QuestionMarkCircleIcon className='h-18 w-20' />
                )}
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-44'>
                    <div className='mt-2'>
                        <UploadImageButton
                            setAssetData={setAssetData}
                            wide={true}
                        />
                    </div>
                    <div className='mt-2'>
                        <NormalButton2
                            text='Change Image'
                            handleSubmit={handleSubmit}
                            wide={true}
                            isDisabled={assetData.length === 0 ? true : false}
                        />
                    </div>
                </div>
            </div>
        </LayoutTabPanel>
    );
};

export default SettingContentPP;
