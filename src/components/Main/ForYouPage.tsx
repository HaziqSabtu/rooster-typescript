import React, { FunctionComponent } from "react";
import Posts from "../Post/Posts";
import Usernewpost from "./components/Usernewpost";
import LayoutMain from "../Layout/LayoutMain";
import { HeadFYP } from "../Head";

interface Props {}

const FP: FunctionComponent<Props> = () => {
    const [count, setCount] = React.useState<number>(0);
    return (
        <div>
            <HeadFYP />
            <LayoutMain>
                <Usernewpost setCount={setCount} />
                <Posts count={count} setCount={setCount} filter={true} />
            </LayoutMain>
        </div>
    );
};

export default FP;
