import { signOut } from "next-auth/react";
import React, { FunctionComponent } from "react";
import { HeadSetting } from "../../components/Head";
import LayoutMain from "../../components/Layout/LayoutMain";

const setting: FunctionComponent = ({}) => {
    return (
        <div>
            <HeadSetting />
            <LayoutMain>
                <h1>Still WIP</h1>
                <button
                    className='btn btn-primary'
                    onClick={() => signOut({ callbackUrl: "/" })}
                >
                    SIGN OUT
                </button>
            </LayoutMain>
        </div>
    );
};

export default setting;
