import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Body } from "../components/Body";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Customer } from "../models/Customer";
import { setCustomersOfCustomerReducer } from "../redux/actions/CustomerAction";
import { RootState } from "../redux/states/RootState";
import { useCustomerService } from "../services/impl/CustomerServiceImpl";

const CustomerPage = () => {
    // service
    const customerService = useCustomerService();

    // state
    const [loading, isLoading] = useState(false);

    // redux
    const customerReduxCustomers = useSelector<RootState, Customer[]>((state) => state.customer.customers);
    const dispatch = useDispatch();

    // local method
    const initData = () => {
        Promise.all([
            //
            customerService.getCustomers(),
        ])
            .then(([_customers]) => {
                //
                dispatch(setCustomersOfCustomerReducer(_customers));

                //
                setTimeout(() => {
                    isLoading(false);
                }, 300);
            })
            .catch((error) => {
                //
            })
            .finally(() => {
                //
            });
    };

    useEffect(() => {
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
            <Header title="Pelanggan"></Header>
            <Body>
                <List
                    data={customerReduxCustomers}
                    render={(item, itemIndex) => (
                        <div className="shadow mb-4 p-2 rounded" key={itemIndex}>
                            <div>{item.name}</div>
                        </div>
                    )}
                />
            </Body>
            <Footer />
        </Container>
    );
};

export default CustomerPage;
