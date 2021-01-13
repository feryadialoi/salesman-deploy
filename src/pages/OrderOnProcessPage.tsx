import React from "react";
import { useHistory } from "react-router-dom";
import { Body } from "../components/Body";
import { ButtonBack } from "../components/ButtonBack";
import { Container } from "../components/Container";
import { Header } from "../components/Header";

const OrderOnProcessPage = () => {
    // service
    const history = useHistory();

    return (
        <Container>
            <Header
                title="Orderan Dalam Proses"
                left={
                    <ButtonBack
                        onClick={() => {
                            history.goBack();
                        }}
                    />
                }
            ></Header>
            <Body></Body>
        </Container>
    );
};

export default OrderOnProcessPage;
