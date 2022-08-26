import { FunctionComponent } from "react";

interface Props {
    htmlFor: string;
}

export const ButtonCancel: FunctionComponent<Props> = ({ htmlFor }) => {
    return (
        <label
            htmlFor={htmlFor}
            className='btn btn-sm text-black bg-white border-none sm:btn-sm md:btn-md lg:btn-lg hover:bg-white'
        >
            Cancel
        </label>
    );
};

interface ApproveProps {
    htmlFor: string;
    handleClick: () => void;
}

export const ButtonApproveRed: FunctionComponent<ApproveProps> = ({
    htmlFor,
    handleClick,
}) => {
    return (
        <label
            htmlFor={htmlFor}
            onClick={handleClick}
            className='btn btn-sm text-white bg-red-700 border-none sm:btn-sm md:btn-md lg:btn-lg hover:bg-red-700'
        >
            Yes, I'm sure
        </label>
    );
};
