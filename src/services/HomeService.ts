import { Order } from "../models/Order";
import { Profile } from "../models/Profile";

export interface HomeService {
    getProfile(): Profile;

    getOrders(): Order[];

    storeOrder(order: Order): Promise<void>;

    getOrdersLocalPersistent(): Order[];

    logout(): Promise<void>;
}
