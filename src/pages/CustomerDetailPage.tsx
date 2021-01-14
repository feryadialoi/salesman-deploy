import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Body } from "../components/Body";
import { ButtonBack } from "../components/ButtonBack";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Customer } from "../models/Customer";
import { useCustomerService } from "../services/impl/CustomerServiceImpl";

interface CustomerDetailPageParams {
    customerId: string;
}

const CustomerDetailPage = () => {
    // service
    const history = useHistory();
    const customerService = useCustomerService();
    const params = useParams<CustomerDetailPageParams>();

    // state
    const [customer, setCustomer] = useState<Customer>();

    // local method
    const initData = () => {
        Promise.all([
            //
            customerService.getCustomerById(1),
        ])
            .then(([_customer]) => {
                //
                setCustomer(_customer);
            })
            .catch((error) => {
                //
            });
    };

    useEffect(() => {
        initData();
    }, []);

    return (
        <Container>
            <Header
                title="Detil Pelanggan"
                left={
                    <ButtonBack
                        onClick={() => {
                            history.goBack();
                        }}
                    />
                }
            ></Header>
            <Body>
                <div>{customer?.name}</div>
            </Body>
        </Container>
    );
};

export default CustomerDetailPage;
