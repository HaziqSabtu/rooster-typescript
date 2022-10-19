import { FilmIcon, PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPost, setVideo } from "../../../slices/sliceNewPost";
import ButtonImage from "../../Button/ButtonImage";
import { AddVideoButton } from "../../Button/ButtonMain";
import UploadImageButton from "../../Button/ButtonUploadImage";
import InputtextSetting from "../../InputText/InputtextSetting";
import { LayoutPopOver } from "../../Layout/LayoutPopOver";

interface Props {
    setAssetData: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddVideo: FunctionComponent<Props> = ({ setAssetData }) => {
    const [videoLink, setVideoLink] = useState("");
    const { video } = useSelector(selectCurrentPost);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVideoLink(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(setVideo(videoLink));
    };

    const handleXMark = () => {
        setVideoLink("");
        dispatch(setVideo(null));
    };

    const title = "Add Video";
    const desc = "Link Youtube Video to your post (max. 1)";
    return (
        <LayoutPopOver icon={<FilmIcon />} title={title} desc={desc}>
            <div className=' flex flex-col gap-4 mt-4'>
                <div className='relative'>
                    <InputtextSetting
                        value={videoLink}
                        handleChange={handleChange}
                        border={true}
                        placeholder={"Youtube Link"}
                        isDisabled={video ? true : false}
                    />
                    <div
                        className='absolute top-1/2 right-0 transform -translate-y-1/2
'
                    >
                        <a onClick={handleXMark}>
                            <ButtonImage
                                children={<XMarkIcon className='' />}
                            />
                        </a>
                    </div>
                </div>

                <AddVideoButton
                    handleSubmit={handleSubmit}
                    isLoading={false}
                    isSubmitted={video ? true : false}
                    isDisabled={video ? true : false}
                />
            </div>
        </LayoutPopOver>
    );
};

export default AddVideo;
