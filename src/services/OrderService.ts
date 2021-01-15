import { Customer } from "../models/Customer";
import { Order } from "../models/Order";
import { Product } from "../models/Product";

export interface OrderService {
    storeOrder(order: Order): Promise<void>;

    getProducts(): Promise<Product[]>;

    getCustomers(): Promise<Customer[]>;

    getOrderLocalPersistentById(id: number): Promise<Order>;

    getOrdersLocalPersistent(): Order[];

    getPurchases(): Promise<Order[]>;

    getPurchaseLocalPersistentById(id: number): Promise<Order>;
}
