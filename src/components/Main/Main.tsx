import React, { FunctionComponent, useEffect } from "react";
import Posts from "../Post/Posts";
import Usernewpost from "./components/Usernewpost";
import { HeadHome } from "../Head";
import LayoutMain from "../Layout/LayoutMain";

interface Props {}

const Main: FunctionComponent<Props> = () => {
    const [count, setCount] = React.useState<number>(0);
    return (
        <div>
            <HeadHome />
            <LayoutMain>
                <Usernewpost setCount={setCount} />
                <Posts count={count} setCount={setCount} />
            </LayoutMain>
        </div>
    );
};

export default Main;
