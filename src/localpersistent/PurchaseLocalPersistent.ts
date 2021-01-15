import { Order } from "../models/Order";

export interface PurchaseLocalPersistent {
    getPurchases(): Order[];

    getPurchase(): Order;

    setPurchases(orders: Order[]): void;

    setPurchase(order: Order): void;

    getPurchaseById(id: number): Order;
}
