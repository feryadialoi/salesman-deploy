import { Product } from "./Product";

export class CartItem {
    public constructor(
        //
        public product: Product,
        public quantity: number,
    ) {}
}
