import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    // let user = localStorage.getItem("validUser");
    let user = false;
    return (

        <Route {...rest} render={props => (
            user && restricted ?
                <Redirect to="/home" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;