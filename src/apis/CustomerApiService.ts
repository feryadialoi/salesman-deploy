import { DummyCustomers } from "../dummydata/DummyCustomers";
import { Customer } from "../models/Customer";
import { ApiService } from "./ApiService";

export class CustomerApiService extends ApiService {
    public async getCustomers(): Promise<Customer[]> {
        return DummyCustomers.getCustomers();
    }

    public async getCustomerById(id: number): Promise<Customer> {
        return (await this.getCustomers()).filter((customer) => customer.id === id)[0];
    }
}
