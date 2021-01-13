import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Body } from "../components/Body";
import { Button } from "../components/Button";
import { ButtonAdd } from "../components/ButtonAdd";
import { ButtonBack } from "../components/ButtonBack";
import { ButtonMinus } from "../components/ButtonMinus";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Modal } from "../components/Modal";
import { Cart } from "../models/Cart";
import { CartItem } from "../models/CartItem";
import { Customer } from "../models/Customer";
import { Product } from "../models/Product";
import {
    addCartItemsOfCartReducer,
    setCartItemsOfCartReducer,
    clearCartItemsOfCartReducer,
} from "../redux/actions/CartAction";
import { RootState } from "../redux/states/RootState";
import { useOrderService } from "../services/impl/OrderServiceImpl";
import { OrderService } from "../services/OrderService";
import { useTextFormatUtil } from "../utils/TextFormatUtil";
import { ButtonTrash } from "../components/ButtonTrash";
import { setCustomersOfCustomerReducer } from "../redux/actions/CustomerAction";
import { setProductsOfProductReducer } from "../redux/actions/ProductAction";
import { BottomContainer } from "../components/BottomContainer";
import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import { AlertBox } from "../components/AlertBox";

const CreateOrderPage = () => {
    // service
    const history = useHistory();
    const orderService: OrderService = useOrderService();

    // utils
    const textFormatUtil = useTextFormatUtil();

    // state
    const [loading, isLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [customerVisible, isCustomerVisible] = useState(false);
    const [productVisible, isProductVisible] = useState(false);
    const [customer, setCustomer] = useState<Customer>();
    const [alertBoxVisible, isAlertBoxVisible] = useState(false);

    // redux
    const cartReduxCartItems = useSelector<RootState, CartItem[]>((state) => state.cart.cartItems);
    const productReduxProducts = useSelector<RootState, Product[]>((state) => state.product.products);
    const customerReduxCustomers = useSelector<RootState, Customer[]>((state) => state.customer.customers);
    const dispatch = useDispatch();

    // local method
    const initData = () => {
        Promise.all<Customer[], Product[]>([
            //
            orderService.getCustomers(),
            orderService.getProducts(),
        ])
            .then(([_customers, _products]) => {
                console.log(_customers);
                console.log(_products);

                // redux state
                dispatch(setCustomersOfCustomerReducer(_customers));
                dispatch(setProductsOfProductReducer(_products));

                setTimeout(() => {
                    isLoading(false);
                }, 500);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const selectCustomer = (customer: Customer) => {
        setCustomer(customer);
        isCustomerVisible(false);
    };

    const addProductToCart = (product: Product, index: number) => {
        const cartItem = new CartItem(product, product.quantity);

        dispatch(addCartItemsOfCartReducer(cartItem));
    };

    const incrementProductQuantity = (product: Product, index: number) => {
        product.quantity += 1;
        console.log(product);

        productReduxProducts[index] = product;
        dispatch(setProductsOfProductReducer([...productReduxProducts]));
    };

    const decrementProductQuantity = (product: Product, index: number) => {
        if (product.quantity > 1) {
            product.quantity -= 1;

            productReduxProducts[index] = product;
            dispatch(setProductsOfProductReducer([...productReduxProducts]));
        }
    };

    const removeCartItem = (index: number) => {
        cartReduxCartItems.splice(index, 1);
        dispatch(setCartItemsOfCartReducer([...cartReduxCartItems]));
    };

    const incrementCartItemQuantity = (index: number) => {
        cartReduxCartItems[index].quantity += 1;
        dispatch(setCartItemsOfCartReducer([...cartReduxCartItems]));
    };

    const decrementCartItemQuantity = (index: number) => {
        if (cartReduxCartItems[index].quantity > 1) {
            cartReduxCartItems[index].quantity -= 1;
            dispatch(setCartItemsOfCartReducer([...cartReduxCartItems]));
        } else {
            removeCartItem(index);
        }
    };

    const processOrder = () => {
        if (customer && cartReduxCartItems.length > 0) {
            const orderItems = cartReduxCartItems.map(
                (cartItem) => new OrderItem(1, cartItem.product, cartItem.quantity),
            );
            const order = new Order(2, customer?.id!, orderItems);
            orderService.storeOrder(order);
        } else {
            if (!customer) {
                console.log("customer not");
            }
            if (cartReduxCartItems.length === 0) {
                console.log("cart item is empty");
            }

            isAlertBoxVisible(true);
        }
    };

    useEffect(() => {
        //
        initData();
    }, []);

    return loading ? (
        <Container>
            <Body>
                <div>loading...</div>
            </Body>
        </Container>
    ) : (
        <Container>
            <AlertBox
                title="Kesalahan"
                visible={alertBoxVisible}
                onClose={() => {
                    isAlertBoxVisible(false);
                }}
                content={<div>Periksa kembali data pelanggan dan produk</div>}
            />
            <Modal
                visible={customerVisible}
                title="Pilih Pelanggan"
                content={
                    <div>
                        <List
                            data={customerReduxCustomers}
                            render={(item, itemIndex) => (
                                <div
                                    onClick={() => {
                                        selectCustomer(item);
                                    }}
                                    key={itemIndex}
                                    className="
                                        p-2 flex shadow mb-4
                                        hover:bg-purple-700 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-purple-600 
                                        focus:ring-opacity-50
                                    "
                                >
                                    <div className="flex-1">{item.name}</div>

                                    <Button
                                        title="Pilih"
                                        onClick={() => {
                                            selectCustomer(item);
                                        }}
                                    />
                                </div>
                            )}
                        />
                    </div>
                }
                onClose={() => {
                    isCustomerVisible(false);
                }}
            />
            <Modal
                visible={productVisible}
                title="Pilih Produk"
                content={
                    <div>
                        <List
                            data={productReduxProducts}
                            render={(item, itemIndex) => (
                                <div key={itemIndex} className="p-2 shadow mb-4">
                                    <div className="flex">
                                        <div className="flex-1">
                                            <div>{item.name}</div>
                                            <div>{textFormatUtil.rupiah(item.price)}</div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex flex-1 items-center content-center">
                                            <ButtonMinus
                                                onClick={() => {
                                                    console.log("button minus");
                                                    decrementProductQuantity(item, itemIndex);
                                                }}
                                            />
                                            <div className="flex p-2">{item.quantity}</div>
                                            <ButtonAdd
                                                onClick={() => {
                                                    console.log("button add");
                                                    incrementProductQuantity(item, itemIndex);
                                                }}
                                            />
                                        </div>
                                        <Button
                                            title="Tambah"
                                            onClick={() => {
                                                addProductToCart(item, itemIndex);
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                }
                onClose={() => {
                    isProductVisible(false);
                }}
            />

            <Header
                title="Buat Orderan"
                left={
                    <ButtonBack
                        onClick={() => {
                            dispatch(clearCartItemsOfCartReducer());
                            history.goBack();
                        }}
                    />
                }
            ></Header>

            <Body>
                <div>
                    <div className="font-medium text-lg">Pelanggan</div>
                    <div>{customer?.name ?? "Pelanggan belum dipilih"}</div>
                    <div className="flex">
                        <Button
                            title="Pilih Pelanggan"
                            onClick={() => {
                                isCustomerVisible(true);
                            }}
                        />
                    </div>
                </div>

                <div>
                    <div className="font-medium text-lg">Produk</div>
                    <div className="w-screen">
                        <Button
                            title="Tambah Produk"
                            onClick={() => {
                                isProductVisible(true);
                            }}
                        />
                    </div>
                    <List
                        data={cartReduxCartItems}
                        render={(item, itemIndex) => (
                            <div key={itemIndex} className="flex shadow">
                                <div className="flex-1">
                                    <div>{item.product.name}</div>
                                    <div>{item.product.price}</div>
                                </div>
                                <div className="flex p-2">
                                    <ButtonMinus
                                        onClick={() => {
                                            //
                                            console.log("minus");
                                            decrementCartItemQuantity(itemIndex);
                                        }}
                                    />
                                    <div>{item.quantity}</div>
                                    <ButtonAdd
                                        onClick={() => {
                                            //
                                            console.log("add");
                                            incrementCartItemQuantity(itemIndex);
                                        }}
                                    />
                                    <ButtonTrash
                                        onClick={() => {
                                            // delete
                                            console.log("%c remove", "color:pink");

                                            removeCartItem(itemIndex);
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    />
                </div>
            </Body>
            <BottomContainer>
                <Button
                    title="Proses"
                    onClick={() => {
                        processOrder();
                    }}
                />
            </BottomContainer>
        </Container>
    );
};

export default CreateOrderPage;
