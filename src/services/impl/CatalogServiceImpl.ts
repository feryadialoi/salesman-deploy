import { ProductApiService } from "../../apis/ProductApiService";
import { Product } from "../../models/Product";
import { CatalogService } from "../CatalogService";

export class CatalogServiceImpl implements CatalogService {
    private productApiService: ProductApiService = new ProductApiService();

    getProducts(): Promise<Product[]> {
        return this.productApiService.getProducts();
    }
}

export const useCatalogService = () => {
    return new CatalogServiceImpl();
};
