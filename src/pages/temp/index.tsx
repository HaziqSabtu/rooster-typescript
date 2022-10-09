import React, { FunctionComponent } from "react";
import { useQuery, gql } from "@apollo/client";

interface Props {}

const Temp: FunctionComponent<Props> = ({}) => {
    const GET_POSTS = gql`
        query Posts {
            posts {
                updatedAt
                content
                image {
                    id
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_POSTS);

    const handleClick = () => {
        data ? console.log(data) : console.log("no data");
        // console.log(env.NEXT_PUBLIC_T);
    };
    return (
        <div>
            <button className='btn btn-primary' onClick={() => handleClick()}>
                fetch
            </button>
        </div>
    );
};

export default Temp;
