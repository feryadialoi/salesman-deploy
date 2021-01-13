import { FC, ReactNode } from "react";

interface HeaderProps {
    title?: string;
    left?: ReactNode;
    right?: ReactNode;
}

export const Header: FC<HeaderProps> = (props) => {
    return (
        <div className="flex h-16 bg-purple-600 items-center px-2">
            {props.children}
            <div>{props.left}</div>
            <div className="flex-1 items-center text-white px-2">{props.title}</div>
            <div>{props.right}</div>
        </div>
    );
};
