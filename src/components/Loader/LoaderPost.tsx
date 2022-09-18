import React, { FunctionComponent } from "react";
import ContentLoader from "react-content-loader";

interface Props {}

const LoaderPost: FunctionComponent<Props> = () => {
    return (
        <div className='p-5'>
            <ContentLoader
                speed={3}
                width={500}
                height={95}
                viewBox='0 0 500 95'
                backgroundColor='#2a303c'
                foregroundColor='#3f4550'
            >
                <rect x='50' y='10' rx='3' ry='3' width='100' height='20' />
                <rect x='0' y='56' rx='3' ry='3' width='500' height='20' />
                <circle cx='20' cy='20' r='17' />
            </ContentLoader>
        </div>
    );
};

export const LoaderPostGenerator = () => {
    return (
        <div>
            {Array.from({ length: 5 }, (_, i) => (
                <LoaderPost key={i} />
            ))}
        </div>
    );
};

export default LoaderPost;
