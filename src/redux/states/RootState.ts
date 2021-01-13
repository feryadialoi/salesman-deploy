import { CartState } from "../reducers/CartReducer";
import { CustomerState } from "../reducers/CustomerReducer";
import { OrderState } from "../reducers/OrderReducer";
import { ProductState } from "../reducers/ProductReducer";

export interface RootState {
    cart: CartState;
    product: ProductState;
    customer: CustomerState;
    order: OrderState;
}
