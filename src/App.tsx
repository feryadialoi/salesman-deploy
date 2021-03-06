import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import NotFoundRoute from "./components/routes/NotFoundRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import CatalogPage from "./pages/CatalogPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import CustomerPage from "./pages/CustomerPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import OrderDonePage from "./pages/OrderDonePage";
import OrderOnProcessPage from "./pages/OrderOnProcessPage";
import OrderPage from "./pages/OrderPage";

const App = () => {
    return (
        <HashRouter basename="/">
            <Switch>
                <PrivateRoute component={HomePage} path="/" exact />
                <PrivateRoute component={OrderPage} path="/orders" exact />
                <PrivateRoute component={CustomerPage} path="/customers" exact />
                <PrivateRoute component={CatalogPage} path="/catalogs" exact />

                <PrivateRoute component={CreateOrderPage} path="/orders/create" exact />
                <PrivateRoute component={OrderOnProcessPage} path="/orders/onprocess" exact />
                <PrivateRoute component={OrderDonePage} path="/orders/done" exact />
                <PrivateRoute component={OrderDetailPage} path="/orders/:orderId" exact />

                <PrivateRoute component={CustomerDetailPage} path="/customers/:customerId" exact />

                <PublicRoute component={LoginPage} path="/login" exact />
                <Route component={NotFoundRoute} />
            </Switch>
        </HashRouter>
    );
};

export default App;
