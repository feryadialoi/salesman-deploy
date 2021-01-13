import { Order } from "../../models/Order";
import { ADD_ORDER, CLEAR_ORDERS, OrderActionTypes, SET_ORDERS } from "../reducers/OrderReducer";

export const setOrdersOfOrderReducer = (payload: Order[]): OrderActionTypes => ({
    type: SET_ORDERS,
    payload,
});

export const addOrderOfOrderReducer = (payload: Order): OrderActionTypes => ({
    type: ADD_ORDER,
    payload,
});

export const clearOrdersOfOrderReducer = (): OrderActionTypes => ({
    type: CLEAR_ORDERS,
});
