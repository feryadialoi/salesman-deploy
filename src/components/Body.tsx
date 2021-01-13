import { FC } from "react";

interface BodyProps {}

export const Body: FC<BodyProps> = (props) => {
    return <div className="flex flex-col flex-1 overflow-y-auto p-4">{props.children}</div>;
};
