import { useHistory } from "react-router-dom";
import { Body } from "../components/Body";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const OrderPage = () => {
    // service
    const history = useHistory();

    // state

    return (
        <Container>
            <Header title="Orderan"></Header>
            <Body>
                <div
                    onClick={() => {
                        history.push("/orders/create");
                    }}
                    className="
                        p-2
                        rounded
                        shadow
                        mb-4
                    "
                >
                    Buat Orderan Baru
                </div>
                <div
                    onClick={() => {
                        history.push("/orders/onprocess");
                    }}
                    className="
                        p-2
                        rounded
                        shadow
                        mb-4
                    "
                >
                    Orderan Dalam Proses
                </div>
                <div
                    onClick={() => {
                        history.push("/orders/done");
                    }}
                    className="
                        p-2
                        rounded
                        shadow
                        mb-4
                    "
                >
                    Orderan Selesai
                </div>
            </Body>
            <Footer />
        </Container>
    );
};

export default OrderPage;
