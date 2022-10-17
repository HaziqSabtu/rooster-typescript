import { PhotoIcon } from "@heroicons/react/24/outline";
import React, { FunctionComponent } from "react";
import UploadImageButton from "../../Button/ButtonUploadImage";
import { LayoutPopOver } from "../../Layout/LayoutPopOver";

interface Props {
    setAssetData: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddImage: FunctionComponent<Props> = ({ setAssetData }) => {
    const title = "Add Image";
    const desc = "Add image(s) to your post (max. 4)";
    return (
        <LayoutPopOver icon={<PhotoIcon />} title={title} desc={desc}>
            <h1 className='my-1'>PHOTO</h1>
            <h1 className='my-1'>PHOTO</h1>
            <h1 className='my-1'>PHOTO</h1>
            <h1 className='my-1'>PHOTO</h1>

            <UploadImageButton setAssetData={setAssetData} wide={true} />
        </LayoutPopOver>
    );
};

export default AddImage;
