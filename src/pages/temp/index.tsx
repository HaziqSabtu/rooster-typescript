import React, { FunctionComponent, useEffect, useState } from "react";
import TempButton from "../../components/Button/ButtonMain";

interface Props {}

const Temp: FunctionComponent<Props> = ({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const text = ["Submit", "Submitted", "Submitting"];
    const handleLoading = () => {
        setIsLoading((state) => !state);
        setIsDisabled(false);
        setIsSubmitted(false);
    };

    const handleDisabled = () => {
        setIsDisabled((state) => !state);
        setIsLoading(false);
        setIsSubmitted(false);
    };

    const handleSubmitted = () => {
        setIsSubmitted((state) => !state);
        setIsLoading(false);
        setIsDisabled(false);
    };

    return (
        <div className='flex gap-3 items-center'>
            <TempButton
                isLoading={isLoading}
                isDisabled={isDisabled}
                isSubmitted={isSubmitted}
                isWide={false}
                handleSubmit={() => {
                    console.log("nana");
                }}
                text={text}
            />
            <button className='btn btn-primary' onClick={handleSubmitted}>
                Submit
            </button>
            <button className='btn btn-primary' onClick={handleLoading}>
                Loading
            </button>
            <button className='btn btn-primary' onClick={handleDisabled}>
                Disable
            </button>
        </div>
    );
};

export default Temp;
