import Head from "next/head";
import React, { FunctionComponent } from "react";

export const HeadHome: FunctionComponent = ({}) => {
    return (
        <>
            <Head>
                <title>Rooster / Home</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                    key='title'
                />
                <link rel='shortcut icon' href='/logo.ico' />
            </Head>
        </>
    );
};

export const HeadSignIn: FunctionComponent = ({}) => {
    return (
        <Head>
            <title>Rooster / Sign In</title>
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
                key='title'
            />
            <link rel='shortcut icon' href='/logo.ico' />
        </Head>
    );
};

export const HeadSearch: FunctionComponent = ({}) => {
    return (
        <Head>
            <title>Rooster / Search</title>
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
                key='title'
            />
            <link rel='shortcut icon' href='/logo.ico' />
        </Head>
    );
};

export const HeadPages: FunctionComponent = ({}) => {
    return (
        <Head>
            <title>Rooster / Pages</title>
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
                key='title'
            />
            <link rel='shortcut icon' href='/logo.ico' />
        </Head>
    );
};

export const HeadSetting: FunctionComponent = ({}) => {
    return (
        <Head>
            <title>Rooster / Setting</title>
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
                key='title'
            />
            <link rel='shortcut icon' href='/logo.ico' />
        </Head>
    );
};

export const HeadWelcome: FunctionComponent = ({}) => {
    return (
        <Head>
            <title>Welcome to Rooster</title>
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
                key='title'
            />
            <link rel='shortcut icon' href='/logo.ico' />
        </Head>
    );
};

export const HeadFYP: FunctionComponent = ({}) => {
    return (
        <Head>
            <title>Rooster / For You</title>
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
                key='title'
            />
            <link rel='shortcut icon' href='/logo.ico' />
        </Head>
    );
};
