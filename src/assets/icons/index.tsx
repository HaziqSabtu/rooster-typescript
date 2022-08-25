import React, { FunctionComponent } from "react";
import trashIcon from "./components/trash-can.png";

interface Props {
    size: number;
}
export const Trash: FunctionComponent<Props> = ({ size }) => {
    return <img src={trashIcon.src} width={size} height={size} />;
};
