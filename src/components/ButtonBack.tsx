import { ArrowLeft } from "heroicons-react";
import { FC } from "react";

interface ButtonBackProps {
    onClick?: () => void;
}

export const ButtonBack: FC<ButtonBackProps> = (props) => {
    return (
        <div
            className="
                hover:bg-purple-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-purple-600 
                focus:ring-opacity-50
                p-2
            "
            onClick={props.onClick}
        >
            <ArrowLeft color="white" />
        </div>
    );
};
