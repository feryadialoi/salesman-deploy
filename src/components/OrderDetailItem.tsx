import { FC } from "react";
import { Order } from "../models/Order";

interface OrderDetailItemProps {
    onClick?: () => void;
    order: Order;
}

export const OrderDetailItem: FC<OrderDetailItemProps> = (props) => {
    return (
        <div onClick={props.onClick} className="flex shadow mb-4 p-2">
            <div className="flex-1">
                <div>{new Date().toDateString()}</div>
                <div>kode orderan {props.order.id}</div>
                <div>{props.order.orderItems.length} jenis barang</div>
            </div>
            <div className="p-2">status</div>
        </div>
    );
};
