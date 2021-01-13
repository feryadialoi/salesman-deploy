import { CartItem } from "./CartItem";

export class Cart {
    public constructor(
        //
        public id: number,
        public customerId: number,
        public cartItems: CartItem[],
    ) {}
}
