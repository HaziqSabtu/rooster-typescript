import React, { FunctionComponent } from "react";
import ReactTimeAgo from "react-time-ago";
import { Post } from "@prisma/client";

interface Props {
    createdAt: Post["createdAt"];
}

const Time: FunctionComponent<Props> = ({ createdAt }) => {
    const processTime = () => {
        return Date.now() - (Date.now() - createdAt.getTime());
    };
    return (
        <ReactTimeAgo date={processTime()} locale='en-US' timeStyle='twitter' />
    );
};

export default Time;
