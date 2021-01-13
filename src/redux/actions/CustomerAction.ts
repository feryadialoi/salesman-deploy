import { Customer } from "../../models/Customer";
import { ADD_CUSTOMER, CLEAR_CUSTOMERS, CustomerActionTypes, SET_CUSTOMERS } from "../reducers/CustomerReducer";

export const setCustomersOfCustomerReducer = (payload: Customer[]): CustomerActionTypes => ({
    type: SET_CUSTOMERS,
    payload,
});

export const addCustomerOfCustomerReducer = (payload: Customer): CustomerActionTypes => ({
    type: ADD_CUSTOMER,
    payload,
});

export const clearCustomersOfCustomerReducer = (): CustomerActionTypes => ({
    type: CLEAR_CUSTOMERS,
});
