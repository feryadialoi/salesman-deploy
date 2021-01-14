import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Body } from "../components/Body";
import { ButtonBack } from "../components/ButtonBack";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { OrderDetailItem } from "../components/OrderDetailItem";
import { Order } from "../models/Order";
import { setOrdersOfOrderReducer } from "../redux/actions/OrderAction";
import { RootState } from "../redux/states/RootState";
import { useOrderService } from "../services/impl/OrderServiceImpl";

const OrderDonePage = () => {
    // service
    const history = useHistory();
    const orderService = useOrderService();

    // state
    const [orders, setOrders] = useState<Order[]>([]);

    // redux
    const orderReduxOrders = useSelector<RootState, Order[]>((state) => state.order.orders);
    const dispatch = useDispatch();

    // local method
    const initData = () => {
        dispatch(setOrdersOfOrderReducer(orderService.getOrdersLocalPersistent()));
    };

    useEffect(() => {
        initData();
    }, []);

    return (
        <Container>
            <Header
                title="Orderan Selesai"
                left={
                    <ButtonBack
                        onClick={() => {
                            history.goBack();
                        }}
                    />
                }
            ></Header>
            <Body>
                <List
                    data={orders}
                    render={(order, itemIndex) => (
                        <OrderDetailItem
                            key={itemIndex}
                            order={order}
                            onClick={() => {
                                console.log(order);
                                history.push("/orders/" + order.id + "?done=true");
                            }}
                        />
                    )}
                />
            </Body>
        </Container>
    );
};

export default OrderDonePage;
