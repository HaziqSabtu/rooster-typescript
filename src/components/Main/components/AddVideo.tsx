import { FilmIcon, PhotoIcon } from "@heroicons/react/24/outline";
import React, { FunctionComponent } from "react";
import UploadImageButton from "../../Button/ButtonUploadImage";
import { LayoutPopOver } from "../../Layout/LayoutPopOver";

interface Props {
    setAssetData: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddVideo: FunctionComponent<Props> = ({ setAssetData }) => {
    const title = "Add Video";
    const desc = "Link Youtube Video to your post (max. 1)";
    return (
        <LayoutPopOver icon={<FilmIcon />} title={title} desc={desc}>
            <h1 className='my-1 text-sm'>Link 1</h1>
            <UploadImageButton wide={true} setAssetData={setAssetData} />
        </LayoutPopOver>
    );
};

export default AddVideo;
