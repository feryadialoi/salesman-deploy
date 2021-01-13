import { OrderItem } from "../models/OrderItem";
import { DummyProducts } from "./DummyProducts";

export class DummyOrderItems {
    private static orderItems: OrderItem[] = [
        //
        new OrderItem(1, DummyProducts.getProduct(1), 10),
        new OrderItem(2, DummyProducts.getProduct(9), 10),
        new OrderItem(3, DummyProducts.getProduct(4), 10),
    ];

    public static getOrderItems(): OrderItem[] {
        return this.orderItems;
    }

    public static getOrderItem(id: number): OrderItem {
        return this.orderItems.filter((orderItem) => orderItem.id === id)[0];
    }
}
