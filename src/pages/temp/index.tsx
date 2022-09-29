import React, { FunctionComponent } from "react";

interface Props {}

const index: FunctionComponent<Props> = ({}) => {
    return (
        <div>
            <a className='btn btn-primary' onClick={() => console.log("click")}>
                click
            </a>
        </div>
    );
};

export default index;
