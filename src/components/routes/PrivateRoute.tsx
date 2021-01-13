import React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";
import { useAuthService } from "../../services/impl/AuthServiceImpl";

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteProps>;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
    const authService = useAuthService();

    return (
        <Route
            {...rest}
            render={(props) => (authService.getAuth() ? <Component {...props} /> : <Redirect to="/login" />)}
        />
    );
};

export default PrivateRoute;
