import { Product } from "./Product";

export class OrderItem {
    public constructor(
        //
        public id: number,
        public product: Product,
        public quantity: number,
    ) {}
}
