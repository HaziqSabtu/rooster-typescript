import React, { FunctionComponent } from "react";
import trashIcon from "./components/trash-can.png";
import redAlert from "./components/red-alert.png";
import tripleDots from "./components/triple-dots.png";
import follow from "./components/follow.png";

interface Props {
    size: number;
}
export const Trash: FunctionComponent<Props> = ({ size }) => {
    return <img src={trashIcon.src} width={size} height={size} />;
};

export const RedAlert: FunctionComponent<Props> = ({ size }) => {
    return <img src={redAlert.src} width={size} height={size} />;
};

export const TripleDots: FunctionComponent<Props> = ({ size }) => {
    return <img src={tripleDots.src} width={size} height={size} />;
};

export const FollowIcon: FunctionComponent<Props> = ({ size }) => {
    return <img src={follow.src} width={size} height={size} />;
};
