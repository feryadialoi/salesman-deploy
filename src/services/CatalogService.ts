import { Product } from "../models/Product";

export interface CatalogService {
    getProducts(): Promise<Product[]>;
}
