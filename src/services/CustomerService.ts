import { Customer } from "../models/Customer";

export interface CustomerService {
    getCustomers(): Promise<Customer[]>;

    getCustomerById(id: number): Promise<Customer>;
}
