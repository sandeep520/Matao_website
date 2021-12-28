import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
    let user = localStorage.getItem("validUser");

    return (

        <Route {...rest} render={props => (
            user ?
                <Component {...props} />
            : <Redirect to="/login" />

        )} />
    );
};

export default PrivateRoute;