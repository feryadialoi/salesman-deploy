import React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";
import { useAuthService } from "../../services/impl/AuthServiceImpl";
import { useHistory } from "react-router-dom";

interface PublicRouteProps extends RouteProps {
    component: React.ComponentType<RouteProps>;
}

const PublicRoute = ({ component: Component, ...rest }: PublicRouteProps) => {
    const authService = useAuthService();
    const history = useHistory();

    return (
        <Route
            {...rest}
            render={(props) =>
                authService.getAuth() && history.location.pathname === "/login" ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PublicRoute;
