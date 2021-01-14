import { Order } from "../models/Order";

export interface OrderLocalPersistent {
    setOrder(order: Order): void;

    getOrder(): Order;

    setOrders(orders: Order[]): void;

    getOrders(): Order[];

    removeOrder(order: Order): void;

    getOrderById(id: number): Order;
}
