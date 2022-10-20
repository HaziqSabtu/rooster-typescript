import { FilmIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matchYoutubeUrl } from "../../../services/video";
import { selectCurrentPost, setVideo } from "../../../slices/sliceNewPost";
import ButtonImage from "../../Button/ButtonImage";
import { AddVideoButton } from "../../Button/ButtonMain";
import InputtextSetting from "../../InputText/InputtextSetting";
import { LayoutPopOver } from "../../Layout/LayoutPopOver";

interface Props {}

const AddVideo: FunctionComponent<Props> = ({}) => {
    const [videoLink, setVideoLink] = useState("");
    const { video, image } = useSelector(selectCurrentPost);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVideoLink(event.target.value);
    };

    const handleSubmit = () => {
        if (matchYoutubeUrl(videoLink)) {
            dispatch(setVideo(videoLink));
        } else {
            console.log("wrong");
        }
    };

    const handleXMark = () => {
        setVideoLink("");
        dispatch(setVideo(null));
    };

    const title = "Add Video";
    const desc = "Link Youtube Video to your post (max. 1)";
    return (
        <LayoutPopOver
            icon={<FilmIcon />}
            title={title}
            desc={desc}
            isDisabled={image.length !== 0 ? true : false}
            isCircle={video ? true : false}
        >
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
                            <ButtonImage>
                                <XMarkIcon className='' />
                            </ButtonImage>
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
