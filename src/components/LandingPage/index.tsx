import React, { FunctionComponent } from "react";
import { HeroMain } from "../../assets/hero";
import {
    MongoLogo,
    NextjsLogo,
    PrismaLogo,
    ReactLogo,
    ReduxLogo,
    TailwindLogo,
    TRPCLogo,
    TypescriptLogo,
} from "../../assets/icons";
import { LogoLarge } from "../../assets/logo/Logo";
import { HeadWelcome } from "../Head";
import { NavBarLP } from "../Navbar";

const madeWith = [
    { name: "React", logo: ReactLogo, href: "https://reactjs.org/" },
    {
        name: "Typescript",
        logo: TypescriptLogo,
        href: "https://www.typescriptlang.org/",
    },
    { name: "Nextjs", logo: NextjsLogo, href: "https://nextjs.org/" },
    { name: "TRPC", logo: TRPCLogo, href: "https://trpc.io/" },
    { name: "MongoDB", logo: MongoLogo, href: "https://www.mongodb.com/" },
    { name: "Redux", logo: ReduxLogo, href: "https://redux.js.org/" },
    { name: "Prisma", logo: PrismaLogo, href: "https://www.prisma.io/" },
    { name: "Tailwind", logo: TailwindLogo, href: "https://tailwindcss.com/" },
];

interface Props {}

const LandingPage: FunctionComponent<Props> = ({}) => {
    return (
        <div>
            <HeadWelcome />
            <NavBarLP />
            <main>
                <div className='relative'>
                    <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                        <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
                            <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                                <div className='flex flex-col-reverse items-center md:flex-row'>
                                    <div>
                                        <h1 className='text-center md:text-left  text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                                            <span className='block text-white '>
                                                Sharing
                                            </span>
                                            <span className='block text-white '>
                                                made
                                            </span>
                                            <strong className=' text-white px-1 fourth-color'>
                                                Easy.
                                            </strong>
                                        </h1>
                                        <p className='mt-6 max-w-lg text-center md:text-left  text-xl text-color-t sm:max-w-3xl'>
                                            &ldquo;Sharing is good, and with
                                            digital technology, sharing is
                                            easy.&rdquo;
                                        </p>
                                        <p className='mt-1 max-w-lg text-center md:text-left  text-xl text-color-t sm:max-w-3xl'>
                                            - Richard Stallman
                                        </p>
                                    </div>
                                    <LogoLarge />
                                </div>
                                <div className='mt-10 max-w-auto sm:max-w-none sm:flex sm:justify-center'>
                                    <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                                        <a
                                            href='/auth/signin'
                                            className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8'
                                        >
                                            <div className='flex flex-row'>
                                                <p>Sign In</p>
                                            </div>
                                        </a>
                                        <a
                                            href='https://github.com/HaziqSabtu/rooster-typescript'
                                            className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8'
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-100'>
                    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
                        <p className='text-center text-sm font-semibold uppercase text-gray-500 tracking-wide'>
                            MADE WITH FOLLOWING TECH STACK
                        </p>
                        <div className='mt-6 flex flex-wrap justify-center'>
                            {madeWith.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className='m-7'
                                >
                                    <div className='flex items-center'>
                                        <item.logo aria-hidden='true' />
                                        <h1 className='text-xl ml-2 text-gray-500'>
                                            {item.name}
                                        </h1>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className='relative pt-16 pb-32 h-screen overflow-hidden'>
                    <div
                        aria-hidden='true'
                        className='absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100'
                    />
                    <div className=''>
                        <div className='lg:mx-auto lg:max-w-7xl lg:px-8'>
                            <div className='px-4 max-w-2xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 h-screen'>
                                {/* <img
                                    className='max-w'
                                    src='https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg'
                                    alt='Inbox user interface'
                                /> */}
                {/* <HeroMain />
                            </div>
                        </div>
                    </div>
                // </div> */}{" "}
                {/* Gradient Feature Section */}
                {/* <div className='bg-gradient-to-r from-purple-800 to-indigo-700'>
                    <div className='max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8'>
                        <h2 className='text-3xl font-extrabold text-white tracking-tight'>
                            Inbox support built for efficiency
                        </h2>
                        <p className='mt-4 max-w-3xl text-lg text-purple-200'>
                            Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi lobortis.
                            Blandit aliquam sit nisl euismod mattis in.
                        </p>
                        <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
                            {/* {features.map((feature) => (
                                <div key={feature.name}>
                                    <div>
                                        <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                                            <feature.icon
                                                className='h-6 w-6 text-white'
                                                aria-hidden='true'
                                            />
                                        </span>
                                    </div>
                                    <div className='mt-6'>
                                        <h3 className='text-lg font-medium text-white'>
                                            {feature.name}
                                        </h3>
                                        <p className='mt-2 text-base text-purple-200'>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))} */}
                {/* </div>
                    </div>
                </div> */}
                {/* Stats section */}
                {/* <div className='relative bg-gray-900'>
                    <div className='h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full'>
                        <div className='h-full w-full xl:grid xl:grid-cols-2'>
                            <div className='h-full xl:relative xl:col-start-2'>
                                <img
                                    className='h-full w-full object-cover opacity-25 xl:absolute xl:inset-0'
                                    src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
                                    alt='People working on laptops'
                                />
                                <div
                                    aria-hidden='true'
                                    className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8'>
                        <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
                            <h2 className='text-sm font-semibold tracking-wide uppercase'>
                                <span className='bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent'>
                                    Valuable Metrics
                                </span>
                            </h2>
                            <p className='mt-3 text-3xl font-extrabold text-white'>
                                Get actionable data that will help grow your
                                business
                            </p>
                            <p className='mt-5 text-lg text-gray-300'>
                                Rhoncus sagittis risus arcu erat lectus
                                bibendum. Ut in adipiscing quis in viverra
                                tristique sem. Ornare feugiat viverra eleifend
                                fusce orci in quis amet. Sit in et vitae tortor,
                                massa. Dapibus laoreet amet lacus nibh integer
                                quis. Eu vulputate diam sit tellus quis at.
                            </p>
                            {/* <div className='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2'>
                                {metrics.map((item) => (
                                    <p key={item.id}>
                                        <span className='block text-2xl font-bold text-white'>
                                            {item.stat}
                                        </span>
                                        <span className='mt-1 block text-base text-gray-300'>
                                            <span className='font-medium text-white'>
                                                {item.emphasis}
                                            </span>{" "}
                                            {item.rest}
                                        </span>
                                    </p>
                                ))}
                            </div> */}
                {/* </div>
                    </div>
                </div> */}
                {/* CTA Section */}
                <div className='primary-color'>
                    <div className='max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between'>
                        <h2 className='text-4xl font-extrabold tracking-tight text-gray-200 sm:text-4xl'>
                            <span className='block'>Interested?</span>
                            <span className='-mb-1 pb-1 block text-color-t bg-clip-text text-transparent'>
                                Check out my other Projects
                            </span>
                        </h2>
                        <div className='mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5'>
                            <a
                                href='https://github.com/HaziqSabtu/rooster-typescript'
                                className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100'
                            >
                                Rooster
                            </a>
                            <a
                                href='https://github.com/HaziqSabtu'
                                className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8'
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
