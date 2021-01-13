import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Body } from "../components/Body";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Product } from "../models/Product";
import { setProductsOfProductReducer } from "../redux/actions/ProductAction";
import { RootState } from "../redux/states/RootState";
import { useCatalogService } from "../services/impl/CatalogServiceImpl";
import { useTextFormatUtil } from "../utils/TextFormatUtil";

const CatalogPage = () => {
    // service
    const catalogService = useCatalogService();
    const textFormatUtil = useTextFormatUtil();

    // state
    const [loading, isLoading] = useState(false);

    // redux
    const productReduxProducts = useSelector<RootState, Product[]>((state) => state.product.products);
    const dispatch = useDispatch();

    const initData = () => {
        Promise.all([
            //
            catalogService.getProducts(),
        ])
            .then(([_products]) => {
                dispatch(setProductsOfProductReducer(_products));

                isLoading(false);
            })
            .catch((error) => {
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
            <Header title="Catalog"></Header>
            <Body>
                <List
                    data={productReduxProducts}
                    render={(item, itemIndex) => (
                        <div className="flex shadow mb-4 rounded p-2" key={itemIndex}>
                            <img
                                className="h-20 w-20 mr-2"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII="
                            />
                            <div>
                                <div>{item.name}</div>
                                <div>{textFormatUtil.rupiah(item.price)}</div>
                                <div>{item.quantity}</div>
                            </div>
                        </div>
                    )}
                />
            </Body>
            <Footer />
        </Container>
    );
};

export default CatalogPage;
