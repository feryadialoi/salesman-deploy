import { Order } from "../../models/Order";
import { OrderLocalPersistent } from "../OrderLocalPersistent";

export class OrderLocalPersistentImpl implements OrderLocalPersistent {
    setOrder(order: Order): void {
        const findOrder = this.getOrders().filter(
            (item) => item.id === order.id && item.customerId == order.customerId,
        );
        if (findOrder.length > 0) {
            console.log("specified order already exist");
        } else {
            const orders = [...this.getOrders(), order];
            this.setOrders(orders);
        }
    }

    getOrder(): Order {
        throw new Error("Method not implemented.");
    }

    setOrders(orders: Order[]): void {
        const value = JSON.stringify(orders);

        localStorage.setItem("orders", value);
    }

    getOrders(): Order[] {
        const ordersString = localStorage.getItem("orders");
        if (ordersString) {
            const ordersParsed = JSON.parse(ordersString) as Order[];
            return ordersParsed;
        } else {
            return [];
        }
    }

    removeOrder(order: Order): void {
        const orders = this.getOrders();
        const newOrders = orders.filter((item) => item.id !== order.id && item.customerId !== order.customerId);
        console.log("removed, the rest", newOrders);
        this.setOrders(newOrders);
        console.log("orderLocalPersistent.removeOrder");
    }

    getOrderById(id: number): Order {
        return this.getOrders().filter((order) => order.id === id)[0];
    }
}
