import { Cart } from "../../models/Cart";
import { CartItem } from "../../models/CartItem";

export const SET_CARTS = "SET_CARTS";

export const SET_CART_ITEMS = "SET_CART_ITEMS";

export const ADD_CART_ITEM = "ADD_CART_ITEM";

export const CLEAR_CART_ITEMS = "CLEAR_CART_ITEMS";

export type SetCarts = {
    type: typeof SET_CARTS;
    payload: Cart[];
};

export type SetCartItems = {
    type: typeof SET_CART_ITEMS;
    payload: CartItem[];
};

export type AddCartItem = {
    type: typeof ADD_CART_ITEM;
    payload: CartItem;
};

export type ClearCartItems = {
    type: typeof CLEAR_CART_ITEMS;
};

export type CartActionTypes = SetCarts | SetCartItems | AddCartItem | ClearCartItems;

export interface CartState {
    carts: Cart[];
    cartItems: CartItem[];
}

const cartState: CartState = {
    carts: [],
    cartItems: [],
};

export const cartReducer = (state = cartState, action: CartActionTypes): CartState => {
    switch (action.type) {
        case SET_CARTS:
            return { ...state, carts: action.payload };
        case SET_CART_ITEMS:
            return { ...state, cartItems: action.payload };
        case ADD_CART_ITEM:
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case CLEAR_CART_ITEMS:
            console.log("clear cart items");
            return { ...state, cartItems: [] };
        default:
            return state;
    }
};
