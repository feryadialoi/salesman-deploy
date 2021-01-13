import { DummyCustomers } from "../../dummydata/DummyCustomers";
import { Customer } from "../../models/Customer";
import { CustomerService } from "../CustomerService";

export class CustomerServiceImpl implements CustomerService {
    public async getCustomers(): Promise<Customer[]> {
        return DummyCustomers.getCustomers();
    }
}

export const useCustomerService = () => {
    return new CustomerServiceImpl();
};
