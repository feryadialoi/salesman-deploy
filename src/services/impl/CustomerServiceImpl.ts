import { CustomerApiService } from "../../apis/CustomerApiService";
import { Customer } from "../../models/Customer";
import { CustomerService } from "../CustomerService";

export class CustomerServiceImpl implements CustomerService {
    private customerApiService: CustomerApiService = new CustomerApiService();

    public async getCustomers(): Promise<Customer[]> {
        return this.customerApiService.getCustomers();
    }

    public async getCustomerById(id: number): Promise<Customer> {
        return this.customerApiService.getCustomerById(id);
    }
}

export const useCustomerService = () => {
    return new CustomerServiceImpl();
};
