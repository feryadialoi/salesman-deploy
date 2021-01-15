import { NetworkOfflineError } from "../errors/NetworkOfflineError";
import { PurchaseLocalPersistentImpl } from "../localpersistent/impl/PurchaseLocalPerstentImpl";
import { Order } from "../models/Order";
import { OrderRequest } from "../models/OrderRequest";
import { InternetConnectionUtil } from "../utils/InternetConnectionUtil";
import { ApiService } from "./ApiService";

export class OrderApiService extends ApiService {
    private purchaseLocalPersistent = new PurchaseLocalPersistentImpl();
    private internetConnectionUtil = new InternetConnectionUtil();

    public async storeOrder(orderRequest: OrderRequest): Promise<void> {
        // const url = this.baseUrl + "/api/v1/orders";
        // const method = "POST";
        // const data = {};
        // const headers = {
        //     Accept: "application/json",
        // };
        // return this.axios.request({
        //     headers,
        //     method,
        //     data,
        //     url,
        // });
        console.log("orderApiService", orderRequest);

        const internetState = await this.internetConnectionUtil.getInternetState();

        if (internetState === "online") {
            const order = new Order(Date.now(), orderRequest.customerId, orderRequest.orderItems);
            this.purchaseLocalPersistent.setPurchase(order);
        } else {
            throw new NetworkOfflineError();
        }
    }

    public async getOrders(): Promise<Order[]> {
        return [];
    }

    public async getPurchases(): Promise<Order[]> {
        return this.purchaseLocalPersistent.getPurchases();
    }

    public async getPurchase(): Promise<Order> {
        return this.purchaseLocalPersistent.getPurchase();
    }
}
