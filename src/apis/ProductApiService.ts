import { DummyProducts } from "../dummydata/DummyProducts";
import { Product } from "../models/Product";
import { ApiService } from "./ApiService";

export class ProductApiService extends ApiService {
    public async getProducts(): Promise<Product[]> {
        return DummyProducts.getProducts();
    }
}
