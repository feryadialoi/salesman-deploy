import { Product } from "./Product";

export class Purchase {
    public constructor(
        //
        public id: number,
        public product: Product,
    ) {}
}
