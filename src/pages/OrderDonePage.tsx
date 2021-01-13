import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Body } from "../components/Body";
import { ButtonBack } from "../components/ButtonBack";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Order } from "../models/Order";

const OrderDonePage = () => {
    // service
    const history = useHistory();

    // state
    const [orders, setOrders] = useState<Order[]>([]);

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
                <div>
                    <List
                        data={orders}
                        render={(item, itemIndex) => (
                            <div>
                                <div>{item.id}</div>
                            </div>
                        )}
                    />
                </div>
            </Body>
        </Container>
    );
};

export default OrderDonePage;
