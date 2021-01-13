import { OrderItem } from "./OrderItem";

export class Order {
    public constructor(
        //
        public id: number,
        public customerId: number,
        public orderItems: OrderItem[],
    ) {}
}
