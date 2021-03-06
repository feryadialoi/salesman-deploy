import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";
import { customerReducer } from "./CustomerReducer";
import { internetConnectionReducer } from "./InternetConnection";
import { orderReducer } from "./OrderReducer";
import { productReducer } from "./ProductReducer";

export const reducers = combineReducers({
    cart: cartReducer,
    product: productReducer,
    customer: customerReducer,
    order: orderReducer,
    internetConnection: internetConnectionReducer,
});
