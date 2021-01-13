import { FC } from "react";

interface ButtonProps {
    title: string;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className="
                bg-purple-600 
                hover:bg-purple-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-purple-600 
                focus:ring-opacity-50
                rounded
                h-10
                px-4
                text-white
                shadow
            "
        >
            {props.title}
        </button>
    );
};
