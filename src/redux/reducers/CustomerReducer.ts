import { Customer } from "../../models/Customer";

export const SET_CUSTOMERS = "SET_CUSTOMERS";

export const ADD_CUSTOMER = "ADD_CUSTOMER";

export const CLEAR_CUSTOMERS = "CLEAR_CUSTOMERS";

export type SetCustomers = {
    type: typeof SET_CUSTOMERS;
    payload: Customer[];
};

export type AddCustomer = {
    type: typeof ADD_CUSTOMER;
    payload: Customer;
};

export type ClearCustomers = {
    type: typeof CLEAR_CUSTOMERS;
};

export type CustomerActionTypes = SetCustomers | AddCustomer | ClearCustomers;

export interface CustomerState {
    customers: Customer[];
}

const customerState: CustomerState = {
    customers: [],
};

export const customerReducer = (state = customerState, action: CustomerActionTypes): CustomerState => {
    switch (action.type) {
        case SET_CUSTOMERS:
            return { ...state, customers: action.payload };
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] };
        case CLEAR_CUSTOMERS:
            return { ...state, customers: [] };
        default:
            return state;
    }
};
