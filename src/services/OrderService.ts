import { Customer } from "../models/Customer";
import { Order } from "../models/Order";
import { Product } from "../models/Product";

export interface OrderService {
    storeOrder(order: Order): void;

    getProducts(): Promise<Product[]>;

    getCustomers(): Promise<Customer[]>;
}
