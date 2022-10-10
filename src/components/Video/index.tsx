import React, { FunctionComponent } from "react";
import ReactPlayer from "react-player/youtube";

interface Props {
    url: string;
}

const VideoPlayer: FunctionComponent<Props> = ({ url }) => {
    return (
        <ReactPlayer
            url={url}
            className='react-player'
            light={true}
            controls={true}
            volume={0.05}
            width='100%'
            height='100%'
        />
    );
};

export const generateVideo = (url: string) => {
    return (
        <div className='player-wrapper relative w-full h-80 justify-center rounded-xl overflow-hidden flex content-center'>
            <VideoPlayer url={url} />
        </div>
    );
};
