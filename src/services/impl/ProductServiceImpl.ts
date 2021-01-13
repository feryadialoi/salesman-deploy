import { DummyProducts } from "../../dummydata/DummyProducts";
import { Product } from "../../models/Product";
import { ProductService } from "../ProductService";

export class ProductServiceImpl implements ProductService {
    async getProducts(): Promise<Product[]> {
        return DummyProducts.getProducts();
    }
}

export const useProductService = () => {
    return new ProductServiceImpl();
};
