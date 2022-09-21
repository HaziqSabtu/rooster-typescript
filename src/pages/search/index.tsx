import React, { FunctionComponent } from "react";
import { HeadSearch } from "../../components/Head";
import LayoutMain from "../../components/Layout/LayoutMain";

interface Props {}

const Search: FunctionComponent<Props> = ({}) => {
    return (
        <div>
            <HeadSearch />
            <LayoutMain>
                <h1>Setting WIP</h1>
            </LayoutMain>
        </div>
    );
};

export default Search;
