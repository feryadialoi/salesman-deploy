import { FC } from "react";

interface BottomContainerProps {}

export const BottomContainer: FC<BottomContainerProps> = (props) => {
    return (
        <div
            className="
            border-t-2 
            flex
            flex-col
            p-3
        "
        >
            {props.children}
        </div>
    );
};
