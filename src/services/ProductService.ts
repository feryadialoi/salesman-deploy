import { Product } from "../models/Product";

export interface ProductService {
    getProducts(): Promise<Product[]>;
}
