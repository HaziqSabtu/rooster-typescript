import React, { FunctionComponent } from "react";
import Posts from "../Post/Posts";
import Sidebar from "../Sidebar/Sidebar";
import Usernewpost from "./components/Usernewpost";

type Props = {};

const Main: FunctionComponent = (props: Props) => {
    const [count, setCount] = React.useState<number>(0);
    return (
        <div className='w-full flex flex-row flex-wrap'>
            <div className='w-full primary-color h-screen flex flex-row flex-wrap justify-center '>
                {/* {currentUser ? (
                    <div className="z-50 secondary-color shadow-lg border-t-4 border-teal-500 absolute bottom-0 w-full md:w-0 md:hidden p-3">
                        <SmallSideBar />
                    </div>
                ) : (
                    ""
                )} */}
                <Sidebar />
                <div className='xl:w-2/5 md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-y-intial antialiased overflow-x-hidden'>
                    <Usernewpost setCount={setCount} />
                    <Posts count={count} setCount={setCount} />
                </div>
            </div>
        </div>
    );
};

export default Main;
