import React, { FunctionComponent } from "react";
import trashIcon from "./components/trash-can.png";
import redAlert from "./components/red-alert.png";
import tripleDots from "./components/triple-dots.png";
import follow from "./components/follow.png";
import github from "./components/github.png";
import google from "./components/google.png";
import discord from "./components/discord.png";
import errorRooster from "./components/error-rooster.png";
import foryou from "./components/foryou.png";
import setting from "./components/setting.png";
import logout from "./components/logout.png";
import react from "./components/react-logo.png";
import typescript from "./components/typescript-logo.png";
import nextjs from "./components/nextjs-logo.png";
import prisma from "./components/prisma-logo.png";
import tailwindcss from "./components/tailwind-logo.png";
import mongo from "./components/mongo-logo.png";
import tRPC from "./components/trpc-logo.png";
import redux from "./components/redux-logo.png";
import Image from "next/image";

interface Props {
    size: number;
}
export const Trash: FunctionComponent<Props> = ({ size }) => {
    return <Image src={trashIcon.src} width={size} height={size} />;
};

export const RedAlert: FunctionComponent<Props> = ({ size }) => {
    return <Image src={redAlert.src} width={size} height={size} />;
};

export const TripleDots: FunctionComponent<Props> = ({ size }) => {
    return <Image src={tripleDots.src} width={size} height={size} />;
};

export const FollowIcon: FunctionComponent<Props> = ({ size }) => {
    return <Image src={follow.src} width={size} height={size} />;
};

export const GitHubIcon: FunctionComponent<Props> = ({ size }) => {
    return <Image src={github.src} width={size} height={size} />;
};

export const GoogleIcon: FunctionComponent<Props> = ({ size }) => {
    return <Image src={google.src} width={size} height={size} />;
};

export const DiscordIcon: FunctionComponent<Props> = ({ size }) => {
    return <Image src={discord.src} width={size} height={size} />;
};

export const ErrorRooster: FunctionComponent<Props> = ({ size }) => {
    return <Image src={errorRooster.src} width={size} height={size} />;
};

export const ForYouIcon: FunctionComponent<Props> = ({ size }) => {
    return <Image src={foryou.src} width={size} height={size} />;
};

export const SettingIcon: FunctionComponent<Props> = ({ size }) => {
    return <Image src={setting.src} width={size} height={size} />;
};

export const LogoutIcon: FunctionComponent<Props> = ({ size }) => {
    return <Image src={logout.src} width={size} height={size} />;
};

export const ReactLogo: FunctionComponent = () => {
    const size = 50;
    return <Image src={react.src} width={size} height={size} />;
};

export const TypescriptLogo: FunctionComponent = () => {
    const size = 50;
    return <Image src={typescript.src} width={size} height={size} />;
};

export const NextjsLogo: FunctionComponent = () => {
    const size = 50;
    return <Image src={nextjs.src} width={size} height={size} />;
};

export const TRPCLogo: FunctionComponent = () => {
    const size = 50;
    return <Image src={tRPC.src} width={size} height={size} />;
};

export const MongoLogo: FunctionComponent = () => {
    const size = 50;
    return <Image src={mongo.src} width={size} height={size} />;
};

export const ReduxLogo: FunctionComponent = () => {
    const size = 50;
    return <Image src={redux.src} width={size} height={size} />;
};

export const PrismaLogo: FunctionComponent = () => {
    const size = 50;
    return <Image src={prisma.src} width={size} height={size} />;
};
export const TailwindLogo: FunctionComponent = () => {
    const size = 50;
    return <Image src={tailwindcss.src} width={size} height={size} />;
};
