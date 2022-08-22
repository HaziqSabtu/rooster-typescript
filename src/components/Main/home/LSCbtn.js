import React from "react";

const LSCbtn = () => {
    return (
        <div className='bg-white p-1 border shadow flex flex-row flex-wrap'>
            <div className='w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold'>
                Like
            </div>
            <div className='w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold'>
                Share
            </div>
            <div className='w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold'>
                Comment
            </div>
        </div>
    );
};

export default LSCbtn;
