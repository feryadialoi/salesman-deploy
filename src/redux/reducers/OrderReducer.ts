import { Order } from "../../models/Order";

export const SET_ORDERS = "SET_ORDERS";

export const CLEAR_ORDERS = "CLEAR_ORDERS";

export const ADD_ORDER = "ADD_ORDER";

export type SetOrders = {
    type: typeof SET_ORDERS;
    payload: Order[];
};

export type AddOrder = {
    type: typeof ADD_ORDER;
    payload: Order;
};

export type ClearOrders = {
    type: typeof CLEAR_ORDERS;
};

export type OrderActionTypes = SetOrders | AddOrder | ClearOrders;

export interface OrderState {
    orders: Order[];
}

const orderState: OrderState = {
    orders: [],
};

export const orderReducer = (state = orderState, action: OrderActionTypes): OrderState => {
    switch (action.type) {
        case SET_ORDERS:
            return { ...state, orders: action.payload };
        case ADD_ORDER:
            return { ...state, orders: [...state.orders, action.payload] };
        case CLEAR_ORDERS:
            return { ...state, orders: [] };
        default:
            return state;
    }
};
