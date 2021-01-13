import { Product } from "../../models/Product";

// types
export const SET_PRODUCTS = "SET_PRODUCTS";

export const ADD_PRODUCT = "ADD_PRODUCT";

export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";

// actions
export type SetProducts = {
    type: typeof SET_PRODUCTS;
    payload: Product[];
};

export type AddProduct = {
    type: typeof ADD_PRODUCT;
    payload: Product;
};

export type ClearProduct = {
    type: typeof CLEAR_PRODUCTS;
};

export type ProductActionTypes = SetProducts | AddProduct | ClearProduct;

export interface ProductState {
    products: Product[];
}

const productState: ProductState = {
    products: [],
};

export const productReducer = (state = productState, action: ProductActionTypes): ProductState => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case CLEAR_PRODUCTS:
            return { ...state, products: [] };
        default:
            return state;
    }
};
