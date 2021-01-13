import { FC } from "react";
import { OrderItem } from "../models/OrderItem";
import { useTextFormatUtil } from "../utils/TextFormatUtil";

interface OrderItemViewProps {
    orderItem: OrderItem;
    onClick?: () => void;
}

export const OrderItemView: FC<OrderItemViewProps> = (props) => {
    // service
    const textFormatUtil = useTextFormatUtil();

    return (
        <div onClick={props.onClick} className="rounded shadow mb-4 p-2">
            <div>{props.orderItem.product.name}</div>
            <div>{textFormatUtil.rupiah(props.orderItem.product.price)}</div>
            <div>{props.orderItem.quantity}</div>
        </div>
    );
};
