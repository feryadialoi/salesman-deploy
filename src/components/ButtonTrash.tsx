import { Trash } from "heroicons-react";
import React from "react";
import { FC } from "react";

interface ButtonTrashProps {
    onClick?: () => void;
    color?: string;
}

export const ButtonTrash: FC<ButtonTrashProps> = (props) => {
    return (
        <div onClick={props.onClick}>
            <Trash color={props.color || "purple"} />
        </div>
    );
};
