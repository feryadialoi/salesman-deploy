import { errorMonitor } from "events";
import { CustomerApiService } from "../../apis/CustomerApiService";
import { OrderApiService } from "../../apis/OrderApiService";
import { ProductApiService } from "../../apis/ProductApiService";
import { OrderLocalPersistentImpl } from "../../localpersistent/impl/OrderLocalPersistentImpl";
import { PurchaseLocalPersistentImpl } from "../../localpersistent/impl/PurchaseLocalPerstentImpl";
import { OrderLocalPersistent } from "../../localpersistent/OrderLocalPersistent";
import { PurchaseLocalPersistent } from "../../localpersistent/PurchaseLocalPersistent";
import { Customer } from "../../models/Customer";
import { Order } from "../../models/Order";
import { OrderRequest } from "../../models/OrderRequest";
import { Product } from "../../models/Product";
import { InternetConnectionUtil } from "../../utils/InternetConnectionUtil";
import { OrderService } from "../OrderService";

export class OrderServiceImpl implements OrderService {
    private orderLocalPersistent: OrderLocalPersistent = new OrderLocalPersistentImpl();
    private orderApiService: OrderApiService = new OrderApiService();
    private productApiService: ProductApiService = new ProductApiService();
    private customerApiService: CustomerApiService = new CustomerApiService();
    private purchaseLocalPersistent: PurchaseLocalPersistent = new PurchaseLocalPersistentImpl();

    storeOrder(order: Order): Promise<void> {
        console.log("store order", order);

        const orderRequest = new OrderRequest(order.customerId, order.orderItems);

        this.orderLocalPersistent.setOrder(order);

        return this.orderApiService
            .storeOrder(orderRequest)
            .then((result) => {
                // sucess, remove local order data
                console.log("%c order store to server succesfully", "color:green");
                this.orderLocalPersistent.removeOrder(order);
            })
            .catch((error) => {
                //
                console.log("%c order store to server fail", "color:red");
                throw new Error("order failed, order store to local instead");
            })
            .finally(() => {
                //
            });
    }

    getProducts(): Promise<Product[]> {
        return this.productApiService.getProducts();
    }

    getCustomers(): Promise<Customer[]> {
        return this.customerApiService.getCustomers();
    }

    async getOrderLocalPersistentById(id: number): Promise<Order> {
        return this.orderLocalPersistent.getOrderById(id);
    }

    getOrdersLocalPersistent(): Order[] {
        return this.orderLocalPersistent.getOrders();
    }

    async getPurchaseLocalPersistentById(id: number): Promise<Order> {
        return this.purchaseLocalPersistent.getPurchaseById(id);
    }

    getPurchases(): Promise<Order[]> {
        return this.orderApiService.getPurchases();
    }
}

export const useOrderService = () => {
    return new OrderServiceImpl();
};
