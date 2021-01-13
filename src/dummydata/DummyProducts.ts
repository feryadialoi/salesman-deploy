import { Product } from "../models/Product";

export class DummyProducts {
    private static products = [
        //
        new Product(1, "Good Day Mocacinno", 2000, 100, 1),
        new Product(2, "Good Day Carrebian Nut", 2000, 100, 1),
        new Product(3, "Good Day Original", 2000, 100, 1),
        new Product(4, "Good Day Chococinno", 2000, 100, 1),
        new Product(5, "Good Day Vanilla Latte", 2000, 100, 1),
        new Product(6, "Nescafe Classic", 2000, 100, 1),
        new Product(7, "Nescafe Original", 2000, 100, 1),
        new Product(8, "Luwak White Koffie Original", 2000, 100, 1),
        new Product(9, "Luwak White Koffie Caramel", 2000, 100, 1),
        new Product(10, "Luwak White Koffie Mocca Rose", 2000, 100, 1),
    ];

    public static getProducts(): Product[] {
        return this.products;
    }

    public static getProduct(id: number): Product {
        return this.products.filter((product) => product.id === id)[0];
    }
}
