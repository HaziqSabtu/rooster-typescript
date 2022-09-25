import main from "./components/main.png";

import React, { FunctionComponent } from "react";
import Image from "next/image";

interface Props {}

export const HeroMain: FunctionComponent<Props> = ({}) => {
    return <Image src={main.src} layout='fill' objectFit='contain' />;
};
