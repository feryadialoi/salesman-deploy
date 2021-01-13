import { FC } from "react";

interface ContainerProps {}

export const Container: FC<ContainerProps> = (props) => {
    return <div className="flex flex-col h-screen">{props.children}</div>;
};
