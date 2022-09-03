import React, { FunctionComponent } from "react";
import trashIcon from "./components/trash-can.png";
import redAlert from "./components/red-alert.png";
import tripleDots from "./components/triple-dots.png";
import follow from "./components/follow.png";
import github from "./components/github.png";
import google from "./components/google.png";
import discord from "./components/discord.png";

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

export const GitHubIcon: FunctionComponent<Props> = ({ size }) => {
    return <img src={github.src} width={size} height={size} />;
};

export const GoogleIcon: FunctionComponent<Props> = ({ size }) => {
    return <img src={google.src} width={size} height={size} />;
};

export const DiscordIcon: FunctionComponent<Props> = ({ size }) => {
    return <img src={discord.src} width={size} height={size} />;
};
