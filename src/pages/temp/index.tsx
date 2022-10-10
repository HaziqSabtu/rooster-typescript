import React, { FunctionComponent } from "react";

interface Props {}

const Temp: FunctionComponent<Props> = ({}) => {
    return (
        <div>
            <button
                className='btn btn-primary'
                onClick={() => console.log("temp")}
            >
                fetch
            </button>
        </div>
    );
};

export default Temp;
