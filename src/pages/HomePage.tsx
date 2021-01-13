import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Body } from "../components/Body";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { OrderItemView } from "../components/OrderItemView";
import { Order } from "../models/Order";
import { Profile } from "../models/Profile";
import { setOrdersOfOrderReducer } from "../redux/actions/OrderAction";
import { RootState } from "../redux/states/RootState";
import { useHomeService } from "../services/impl/HomeServiceImp";
import { useOrderService } from "../services/impl/OrderServiceImpl";

const HomePage = () => {
    // service
    const homeService = useHomeService();
    const orderService = useOrderService();

    // state
    const [profile, setProfile] = useState<Profile>();
    const [orders, setOrders] = useState<Order[]>([]);

    // redux
    const orderReduxOrders = useSelector<RootState, Order[]>((state) => state.order.orders);
    const dispatch = useDispatch();

    const initData = () => {
        const _orders = homeService.getOrdersLocalPersistent();
        dispatch(setOrdersOfOrderReducer(_orders));
    };

    useEffect(() => {
        //
        setProfile(homeService.getProfile());
        setOrders(homeService.getOrders());

        initData();
    }, []);

    return (
        <Container>
            <Header
                title="Home"
                right={
                    <div>
                        <div className="text-white">{profile?.name}</div>
                    </div>
                }
            ></Header>
            <Body>
                <List
                    data={orderReduxOrders}
                    render={(order, orderIndex) => (
                        <div className="mb-8" key={orderIndex}>
                            <List
                                data={order.orderItems}
                                render={(orderDetail, orderDetailIndex) => (
                                    <OrderItemView onClick={() => {}} orderItem={orderDetail} key={orderDetailIndex} />
                                )}
                            />
                            <Button
                                title="checkout"
                                onClick={() => {
                                    console.log(order.orderItems);
                                    homeService.storeOrder(order);
                                }}
                            />
                        </div>
                    )}
                />
            </Body>
            <Footer />
        </Container>
    );
};

export default HomePage;
