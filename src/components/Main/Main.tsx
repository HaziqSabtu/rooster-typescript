import React, { FunctionComponent } from "react";
import Sidebar from "../Sidebar/Sidebar";

type Props = {};

const Main: FunctionComponent = (props: Props) => {
    console.log("home");
    return (
        <div>
            Home
            <Sidebar />
        </div>
    );
};

export default Main;
