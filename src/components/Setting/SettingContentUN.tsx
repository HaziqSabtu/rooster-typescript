import { User } from "next-auth";
import React, { FunctionComponent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { getUpdateUserNameInput } from "../../services/user";
import { updateUserName } from "../../slices/sliceCurrentUser";
import { trpc } from "../../utils/trpc";
import { NormalButton2 } from "../Button/ButtonSubmit";
import InputtextSetting from "../InputText/InputtextSetting";
import LayoutTabPanel from "../Layout/LayoutTabPanel";

interface Props {
    title: string;
    desc: string;
    userData: User | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SettingContentUN: FunctionComponent<Props> = ({
    title,
    desc,
    userData,
    handleChange,
}) => {
    const { mutateAsync } = trpc.useMutation(["user.updateUserName"]);
    const dispatch = useDispatch();

    const { name } = userData || {};

    const handleSubmit = useCallback(async () => {
        if (userData) {
            await mutateAsync(getUpdateUserNameInput(userData.name as string))
                .then((res) => {
                    console.log(res);
                    dispatch(updateUserName(userData.name as string));
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }, [mutateAsync, getUpdateUserNameInput, userData]);

    return (
        <LayoutTabPanel title={title} desc={desc}>
            <div className='mt-4'>
                {name && (
                    <InputtextSetting
                        value={name}
                        handleChange={handleChange}
                    />
                )}
            </div>
            <div className='flex flex-row-reverse mt-2'>
                <NormalButton2 text='Submit' handleSubmit={handleSubmit} />
            </div>
        </LayoutTabPanel>
    );
};

export default SettingContentUN;
