import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import { DummyProducts } from "./DummyProducts";

export class DummyMain {
    private static orders: Order[] = [
        //
        new Order(1, 1, [
            //
            new OrderItem(1, DummyProducts.getProduct(1), 10),
            new OrderItem(2, DummyProducts.getProduct(3), 10),
            new OrderItem(3, DummyProducts.getProduct(4), 10),
        ]),
        new Order(2, 3, [
            //
            new OrderItem(4, DummyProducts.getProduct(9), 10),
            new OrderItem(5, DummyProducts.getProduct(10), 10),
            new OrderItem(6, DummyProducts.getProduct(2), 10),
        ]),
        new Order(3, 2, [
            //
            new OrderItem(7, DummyProducts.getProduct(8), 10),
            new OrderItem(8, DummyProducts.getProduct(7), 10),
            new OrderItem(9, DummyProducts.getProduct(6), 10),
        ]),
    ];

    public static getOrders(): Order[] {
        return this.orders;
    }
}
