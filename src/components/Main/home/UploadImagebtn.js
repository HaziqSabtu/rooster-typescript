//https://flowbite.com/docs/components/buttons/
//https://thewebdev.info/2021/11/07/how-to-read-and-upload-a-file-in-react-using-custom-button/

import React from "react";
import { useState, useRef } from "react";
import { client } from "../../client/client";

const UploadImagebtn = ({ setAssetData }) => {
    const [loading, setLoading] = useState(false);
    const [istypeCorrect, setIstypeCorrect] = useState(true);
    const [isUploaded, setIsUploaded] = useState(false);

    const fileRef = useRef();

    const handleChange = (event) => {
        setLoading(true);
        uploadImage(event);
    };

    const uploadImage = (event) => {
        const imageFile = event.target.files[0];
        console.log(imageFile);

        if (
            imageFile.type === "image/png" ||
            imageFile.type === "image/svg" ||
            imageFile.type === "image/jpeg"
        ) {
            setLoading(true);
            setIstypeCorrect(true);

            client.assets
                .upload("image", imageFile, {
                    filename: imageFile.name,
                    contentType: imageFile.type,
                })
                .then((image) => {
                    setAssetData(image);
                    setLoading(false);
                    setIsUploaded(true);
                })
                .catch((error) => {
                    console.log("Error during Uploading Image", error);
                });
        } else {
            setIstypeCorrect(false);
            setLoading(false);
        }
    };

    const cancelUpload = () => {
        console.log("is null");
        setAssetData(null);
        setIsUploaded(false);
        setIstypeCorrect(true);
    };

    return (
        <div>
            <input
                ref={fileRef}
                onChange={handleChange}
                type='file'
                multiple={false}
                style={{ display: "none" }}
            />
            {!isUploaded && !loading && istypeCorrect && (
                <button
                    type='button'
                    onClick={() => fileRef.current.click()}
                    className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#000000'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <rect x='3' y='3' width='18' height='18' rx='2' />
                        <circle cx='8.5' cy='8.5' r='1.5' />
                        <path d='M20.4 14.5L16 10 4 20' />
                    </svg>
                    <p className='ml-2'>Upload Image</p>
                </button>
            )}
            {!isUploaded && loading && istypeCorrect && (
                <button
                    disabled
                    type='button'
                    className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2'
                >
                    <svg
                        aria-hidden='true'
                        width='24'
                        height='24'
                        role='status'
                        className='inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600'
                        viewBox='0 0 100 101'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='currentColor'
                        />
                        <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='#1C64F2'
                        />
                    </svg>
                    Loading...
                </button>
            )}
            {isUploaded && istypeCorrect && (
                <button
                    type='button'
                    onClick={cancelUpload}
                    className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#000000'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <rect x='3' y='3' width='18' height='18' rx='2' />
                        <circle cx='8.5' cy='8.5' r='1.5' />
                        <path d='M20.4 14.5L16 10 4 20' />
                    </svg>
                    <p className='ml-2'>Uploaded</p>
                </button>
            )}
            {!istypeCorrect && (
                <button
                    type='button'
                    onClick={cancelUpload}
                    className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#000000'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <rect x='3' y='3' width='18' height='18' rx='2' />
                        <circle cx='8.5' cy='8.5' r='1.5' />
                        <path d='M20.4 14.5L16 10 4 20' />
                    </svg>
                    <p className='ml-2'>Wrong Image Format</p>
                </button>
            )}
        </div>
    );
};

export default UploadImagebtn;
