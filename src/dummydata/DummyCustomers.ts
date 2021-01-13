import { Customer } from "../models/Customer";

export class DummyCustomers {
    private static customers: Customer[] = [
        //
        new Customer(1, "customer 1"),
        new Customer(2, "customer 2"),
        new Customer(3, "customer 3"),
    ];

    public static getCustomers(): Customer[] {
        return this.customers;
    }

    public static getCustomer(id: number): Customer {
        return this.customers.filter((customer) => customer.id === id)[0];
    }
}
