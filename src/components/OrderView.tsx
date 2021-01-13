import { FC } from "react";

interface OrderViewProps {}

export const OrderView: FC<OrderViewProps> = (props) => {
    return <div className="">{props.children}</div>;
};
