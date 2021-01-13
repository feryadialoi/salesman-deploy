import { XCircle } from "heroicons-react";
import { FC } from "react";

interface ButtonCloseProps {
    onClick?: () => void;
    color?: string;
}

export const ButtonClose: FC<ButtonCloseProps> = (props) => {
    return (
        <div onClick={props.onClick}>
            <XCircle color={props.color || "white"} />
        </div>
    );
};
