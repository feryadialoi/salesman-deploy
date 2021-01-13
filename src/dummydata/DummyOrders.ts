import { Order } from "../models/Order";

export class DummyOrders {
    private static orders: Order[] = [
        // new Order()
    ];

    public static getOrders() {
        return this.orders;
    }

    public static getOrder(id: number): Order {
        return this.orders.filter((order) => order.id === id)[0];
    }
}
