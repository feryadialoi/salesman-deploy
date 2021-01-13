import { MinusCircle } from "heroicons-react";
import React from "react";
import { FC } from "react";

interface ButtonMinusProps {
    onClick?: () => void;
    color?: string;
}

export const ButtonMinus: FC<ButtonMinusProps> = (props) => {
    return (
        <div onClick={props.onClick}>
            <MinusCircle color={props.color || "purple"} />
        </div>
    );
};
