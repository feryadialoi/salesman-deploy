import { OrderRequest } from "../models/OrderRequest";
import { ApiService } from "./ApiService";

export class OrderApiService extends ApiService {
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
    }
}
