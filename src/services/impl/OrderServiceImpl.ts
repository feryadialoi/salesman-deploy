import { CustomerApiService } from "../../apis/CustomerApiService";
import { OrderApiService } from "../../apis/OrderApiService";
import { ProductApiService } from "../../apis/ProductApiService";
import { OrderLocalPersistentImpl } from "../../localpersistent/impl/OrderLocalPersistentImpl";
import { OrderLocalPersistent } from "../../localpersistent/OrderLocalPersistent";
import { Customer } from "../../models/Customer";
import { Order } from "../../models/Order";
import { OrderRequest } from "../../models/OrderRequest";
import { Product } from "../../models/Product";
import { OrderService } from "../OrderService";

export class OrderServiceImpl implements OrderService {
    private orderLocalPersistent: OrderLocalPersistent = new OrderLocalPersistentImpl();
    private orderApiService: OrderApiService = new OrderApiService();
    private productApiService: ProductApiService = new ProductApiService();
    private customerApiService: CustomerApiService = new CustomerApiService();

    storeOrder(order: Order): Promise<void> {
        console.log("store order", order);

        this.orderLocalPersistent.setOrder(order);

        const orderRequest = new OrderRequest(order.customerId, order.orderItems);
        return this.orderApiService
            .storeOrder(orderRequest)
            .then((result) => {
                // sucess, remove local order data
                console.log("%c order store to server succesfully", "color:green");
            })
            .catch((error) => {
                //
                console.log("%c order store to server fail", "color:red");
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
}

export const useOrderService = () => {
    return new OrderServiceImpl();
};
