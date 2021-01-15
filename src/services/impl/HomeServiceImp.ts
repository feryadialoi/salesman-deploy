import { OrderApiService } from "../../apis/OrderApiService";
import { DummyMain } from "../../dummydata/DummyMain";
import { OrderLocalPersistentImpl } from "../../localpersistent/impl/OrderLocalPersistentImpl";
import { ProfileLocalPersistentImpl } from "../../localpersistent/impl/ProfileLocalPersistentImpl";
import { OrderLocalPersistent } from "../../localpersistent/OrderLocalPersistent";
import { ProfileLocalPersistent } from "../../localpersistent/ProfileLocalPersistent";
import { Order } from "../../models/Order";
import { OrderRequest } from "../../models/OrderRequest";
import { Profile } from "../../models/Profile";
import { AuthService } from "../AuthService";
import { HomeService } from "../HomeService";
import { AuthServiceImpl } from "./AuthServiceImpl";

export class HomeServiceImpl implements HomeService {
    private profileLocalPersistent: ProfileLocalPersistent = new ProfileLocalPersistentImpl();
    private orderApiService: OrderApiService = new OrderApiService();
    private orderLocalPersistent: OrderLocalPersistent = new OrderLocalPersistentImpl();
    private authService: AuthService = new AuthServiceImpl();

    getProfile(): Profile {
        return this.profileLocalPersistent.getProfile();
    }

    getOrders(): Order[] {
        return DummyMain.getOrders();
    }

    getOrdersLocalPersistent(): Order[] {
        return this.orderLocalPersistent.getOrders();
    }

    async storeOrder(order: Order): Promise<void> {
        const orderRequest = new OrderRequest(
            //
            order.customerId,
            order.orderItems,
        );
        this.orderApiService.storeOrder(orderRequest);
    }

    async logout(): Promise<void> {
        this.authService.logout();
    }
}

export const useHomeService = () => {
    return new HomeServiceImpl();
};
