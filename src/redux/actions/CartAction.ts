import { Cart } from "../../models/Cart";
import { CartItem } from "../../models/CartItem";
import { ADD_CART_ITEM, CartActionTypes, CLEAR_CART_ITEMS, SET_CARTS, SET_CART_ITEMS } from "../reducers/CartReducer";

export const setCartsOfCartReducer = (payload: Cart[]): CartActionTypes => ({
    type: SET_CARTS,
    payload,
});

export const setCartItemsOfCartReducer = (payload: CartItem[]): CartActionTypes => ({
    type: SET_CART_ITEMS,
    payload,
});

export const addCartItemsOfCartReducer = (payload: CartItem): CartActionTypes => ({
    type: ADD_CART_ITEM,
    payload,
});

export const clearCartItemsOfCartReducer = (): CartActionTypes => ({
    type: CLEAR_CART_ITEMS,
});
