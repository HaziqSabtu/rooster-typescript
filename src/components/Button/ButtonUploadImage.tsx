//https://flowbite.com/docs/components/buttons/
//https://thewebdev.info/2021/11/07/how-to-read-and-upload-a-file-in-react-using-custom-button/

import { PhotoIcon } from "@heroicons/react/24/outline";
import React, { FunctionComponent, useCallback } from "react";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { joinClassNames } from "../../services/common";
import { checkFileType } from "../../services/image";
import { selectCurrentPost, setImage } from "../../slices/sliceNewPost";
import { trpc } from "../../utils/trpc";
import { AddImageButton } from "./ButtonMain";

interface Props {}

interface ImageData {
    url: string;
}

const UploadImageButton: FunctionComponent<Props> = ({}) => {
    const [loading, setLoading] = useState(false);
    const [istypeCorrect, setIstypeCorrect] = useState(true);

    const fileRef = useRef<HTMLInputElement | null>(null);

    const { image } = useSelector(selectCurrentPost);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        uploadImage(event);
    };

    const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setLoading(true);
            const imageFile = event.target.files[0];

            if (imageFile && !checkFileType(imageFile)) {
                setIstypeCorrect(false);
                setLoading(false);
                return;
            }

            const form = new FormData();
            form.set("file", imageFile as Blob);

            fetch("/api/upload/image", { method: "POST", body: form })
                .then((res) => res.json())
                .then((data) => onSuccess(data));
        }
    };

    const onSuccess = ({ url }: ImageData) => {
        dispatch(setImage(url));
        setLoading(false);
    };

    return (
        <>
            <input
                ref={fileRef}
                onChange={handleChange}
                type='file'
                multiple={false}
                style={{ display: "none" }}
            />
            <AddImageButton
                isLoading={loading}
                isSubmitted={image.length !== 0 ? true : false}
                isDisabled={image?.length === 4 ? true : false}
                handleSubmit={() => fileRef.current?.click()}
            />
        </>
    );
};

export default UploadImageButton;
