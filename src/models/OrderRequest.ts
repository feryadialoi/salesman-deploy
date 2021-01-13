import { OrderItem } from "./OrderItem";

export class OrderRequest {
    public constructor(
        //a
        public customerId: number,
        public orderItems: OrderItem[],
    ) {}
}
