import { Order } from "../../models/Order";
import { PurchaseLocalPersistent } from "../PurchaseLocalPersistent";

export class PurchaseLocalPersistentImpl implements PurchaseLocalPersistent {
    private key: string = "order_done";

    getPurchases(): Order[] {
        const purchasesString = localStorage.getItem(this.key);
        if (purchasesString) {
            const purchases = JSON.parse(purchasesString) as Order[];

            return purchases;
        } else {
            return [];
        }
    }
    getPurchase(): Order {
        throw new Error("Method not implemented.");
    }

    getPurchaseById(id: number): Order {
        return this.getPurchases().filter((purchase) => purchase.id === id)[0];
    }

    setPurchases(orders: Order[]): void {
        const purchases = this.getPurchases();
        const newPurchases = [...purchases, ...orders];
        const value = JSON.stringify(newPurchases);

        localStorage.setItem(this.key, value);
    }

    setPurchase(order: Order): void {
        const purchases = this.getPurchases();
        const newPurchases = [...purchases, order];
        const value = JSON.stringify(newPurchases);

        localStorage.setItem(this.key, value);
    }
}
