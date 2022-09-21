/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";

import { HeadHome } from "../Head";
import LayoutMain from "../Layout/LayoutMain";
import Usernewpost from "../Main/components/Usernewpost";
import Posts from "../Post/Posts";

export default function Homee() {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <HeadHome />
            <LayoutMain>
                <Usernewpost setCount={setCount} />
                <Posts count={count} setCount={setCount} />
            </LayoutMain>
        </div>
    );
}
