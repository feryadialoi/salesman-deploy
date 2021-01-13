import { PlusCircle } from "heroicons-react";
import { FC } from "react";

interface ButtonAddProps {
    onClick?: () => void;
}

export const ButtonAdd: FC<ButtonAddProps> = (props) => {
    return (
        <div onClick={props.onClick}>
            <PlusCircle color="purple" />
        </div>
    );
};
