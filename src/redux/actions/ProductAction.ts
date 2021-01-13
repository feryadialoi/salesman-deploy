import { Product } from "../../models/Product";
import { ADD_PRODUCT, CLEAR_PRODUCTS, ProductActionTypes, SET_PRODUCTS } from "../reducers/ProductReducer";

export const setProductsOfProductReducer = (payload: Product[]): ProductActionTypes => ({
    type: SET_PRODUCTS,
    payload,
});

export const addProductOfProductReducer = (payload: Product): ProductActionTypes => ({
    type: ADD_PRODUCT,
    payload,
});

export const clearProductsOfProductReducer = () => ({
    type: CLEAR_PRODUCTS,
});
