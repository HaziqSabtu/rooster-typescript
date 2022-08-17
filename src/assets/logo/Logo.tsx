import React, { FunctionComponent } from "react";
import logo from "./logo.png";

interface Props {
    width?: number;
    height?: number;
}
const Logo: FunctionComponent<Props> = ({ width, height }) => {
    return (
        <div className=' pl-0'>
            <img src={logo.src} width={width} alt='logo' />
        </div>
    );
};

export default Logo;
